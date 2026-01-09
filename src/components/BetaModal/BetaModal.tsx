'use client';
import { useState } from 'react';
import { X } from 'lucide-react';
import styles from './BetaModal.module.css';

interface BetaModalProps {
    isOpen: boolean;
    onClose: () => void;
    platform: string;
}

export default function BetaModal({ isOpen, onClose, platform }: BetaModalProps) {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/beta-signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, platform }),
            });

            if (res.ok) {
                setStatus('success');
                setTimeout(() => {
                    onClose();
                    setStatus('idle');
                    setEmail('');
                }, 2000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <span className={styles.title}>Join Beta for {platform}</span>
                    <button onClick={onClose} className={styles.closeBtn}>
                        <X size={20} />
                    </button>
                </div>

                {status === 'success' ? (
                    <div className={styles.status + ' ' + styles.success}>
                        Successfully joined the waitlist! Check your email.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <p style={{ fontSize: '14px', color: '#888' }}>
                            Get early access to daily builds and exclusive features.
                        </p>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className={styles.input}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
                            {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
                        </button>
                        {status === 'error' && <div className={styles.status + ' ' + styles.error}>Something went wrong.</div>}
                    </form>
                )}
            </div>
        </div>
    );
}
