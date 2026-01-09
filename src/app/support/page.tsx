'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './support.module.css';

export default function SupportPage() {
    const [formData, setFormData] = useState({
        name: '', email: '', platform: 'Android', version: 'v2.2.2026',
        steps: '', expected: '', actual: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        try {
            const res = await fetch('/api/bug-report', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (res.ok) setStatus('success');
            else setStatus('error');
        } catch {
            setStatus('error');
        }
    };

    return (
        <main className={styles.main}>
            <Navbar />

            <div className={styles.container}>
                {/* Left Column: Form */}
                <motion.div
                    className={styles.formSection}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.header}>
                        <motion.span
                            className={styles.badge}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            Bug Tracker
                        </motion.span>
                        <motion.h1
                            className={styles.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            Help Us<br />Fix It.
                        </motion.h1>
                        <motion.p
                            className={styles.desc}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            Found a glitch in the matrix? Let us know. The more detail you provide, the faster our engineers can squash it.
                        </motion.p>
                    </div>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        {/* Section 1 */}
                        <motion.div
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <div className={styles.cardHeader}>
                                <div className={styles.stepNumber}>1</div>
                                <span className={styles.cardTitle}>Submitters Info</span>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.fieldGroup}>
                                    <label className={styles.label}>Name</label>
                                    <input className={styles.input} name="name"
                                        placeholder="John Doe" value={formData.name} onChange={handleChange} required />
                                </div>
                                <div className={styles.fieldGroup}>
                                    <label className={styles.label}>Contact Email</label>
                                    <input className={styles.input} name="email" type="email"
                                        placeholder="john@example.com" value={formData.email} onChange={handleChange} required />
                                </div>
                            </div>
                        </motion.div>

                        {/* Section 2 */}
                        <motion.div
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <div className={styles.cardHeader}>
                                <div className={styles.stepNumber}>2</div>
                                <span className={styles.cardTitle}>Incident Details</span>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.fieldGroup}>
                                    <label className={styles.label}>Platform</label>
                                    <select className={styles.select} name="platform" value={formData.platform} onChange={handleChange}>
                                        <option>Android</option>
                                        <option>Windows</option>
                                        <option>iOS</option>
                                        <option>Smart TV</option>
                                    </select>
                                </div>
                                <div className={styles.fieldGroup}>
                                    <label className={styles.label}>App Version</label>
                                    <input className={styles.input} name="version" readOnly value={formData.version} style={{ opacity: 0.5 }} />
                                </div>
                            </div>

                            <div className={styles.fieldGroup} style={{ marginBottom: 24 }}>
                                <label className={styles.label}>Steps to Reproduce</label>
                                <textarea className={styles.textarea} name="steps"
                                    placeholder="1. Open Settings 2. Navigate to Audio..." value={formData.steps} onChange={handleChange} required />
                            </div>

                            <div className={styles.row}>
                                <div className={styles.fieldGroup}>
                                    <label className={styles.label}>Expected Behavior</label>
                                    <textarea className={styles.textarea} name="expected"
                                        placeholder="The toggle should switch on..." value={formData.expected} onChange={handleChange} />
                                </div>
                                <div className={styles.fieldGroup}>
                                    <label className={styles.label}>Actual Behavior</label>
                                    <textarea className={styles.textarea} name="actual"
                                        placeholder="App crashes immediately..." value={formData.actual} onChange={handleChange} />
                                </div>
                            </div>
                        </motion.div>

                        <motion.button
                            className={styles.submitBtn}
                            disabled={status === 'sending'}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {status === 'sending' ? 'Submitting Report...' :
                                status === 'success' ? 'Report Sent Successfully!' : 'Submit Report'}
                        </motion.button>
                        {status === 'error' && <p style={{ color: '#f87171', textAlign: 'center' }}>Failed to send report. Try again.</p>}
                    </form>
                </motion.div>

                {/* Right Column: Info */}
                <motion.div
                    className={styles.infoSection}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                >
                    <div className={styles.infoTitle}>Before You Submit</div>

                    <div className={styles.infoCard}>
                        <div className={styles.infoCardTitle}>Check Connections</div>
                        <div className={styles.infoCardDesc}>Ensure you have an active internet connection.</div>
                    </div>

                    <div className={styles.infoCard}>
                        <div className={styles.infoCardTitle}>Update App</div>
                        <div className={styles.infoCardDesc}>Make sure you are on the latest version (v2.2.2026).</div>
                    </div>

                    <div className={styles.infoCard}>
                        <div className={styles.infoCardTitle}>Clear Cache</div>
                        <div className={styles.infoCardDesc}>Try clearing app cache from Settings &gt; Storage.</div>
                    </div>

                    <div className={styles.infoCard}>
                        <div className={styles.infoCardTitle}>Restart</div>
                        <div className={styles.infoCardDesc}>A simple restart fixes 80% of glitches.</div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
