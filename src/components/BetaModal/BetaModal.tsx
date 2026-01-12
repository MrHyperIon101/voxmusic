'use client';
import { useState } from 'react';
import { X } from 'lucide-react';
import styles from './BetaModal.module.css';

interface BetaModalProps {
    isOpen: boolean;
    onClose: () => void;
    platform: string;
    mode?: 'default' | 'playstore';
}

export default function BetaModal({ isOpen, onClose, platform, mode = 'default' }: BetaModalProps) {
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
                body: JSON.stringify({ email, platform, mode }),
            });

            if (res.ok) {
                setStatus('success');
                setTimeout(() => {
                    if (mode === 'playstore') {
                        // Optional: Redirect or just close. For now, we'll just close.
                        // window.open('https://play.google.com/store/apps/details?id=com.voxmusic', '_blank');
                    }
                    onClose();
                    setStatus('idle');
                    setEmail('');
                }, 3000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    const isPlayStore = mode === 'playstore';

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <span className={styles.title}>
                        {isPlayStore ? 'Join Closed Testing' : `Join Beta for ${platform}`}
                    </span>
                    <button onClick={onClose} className={styles.closeBtn}>
                        <X size={20} />
                    </button>
                </div>

                {status === 'success' ? (
                    <div className={styles.status + ' ' + styles.success}>
                        {isPlayStore
                            ? "You've been added to the list! Please allow some time for Google to update permissions."
                            : "Successfully joined the waitlist! Check your email."}
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <p style={{ fontSize: '14px', color: '#888' }}>
                            {isPlayStore
                                ? "As the app is in closed testing for 14 weeks in accordance with Play Store policies, your email is required to grant access."
                                : "Get early access to daily builds and exclusive features."}
                        </p>
                        <input
                            type="email"
                            placeholder="Enter your Google Play email"
                            className={styles.input}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
                            {status === 'loading' ? 'Submitting...' : isPlayStore ? 'Request Access' : 'Join Waitlist'}
                        </button>
                        {status === 'error' && <div className={styles.status + ' ' + styles.error}>Something went wrong.</div>}
                    </form>
                )}
            </div>
        </div>
    );
}
