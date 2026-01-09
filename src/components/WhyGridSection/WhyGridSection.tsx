'use client';
import { motion } from 'framer-motion';
import { Unlock, Smartphone, CheckCircle } from 'lucide-react';
import styles from './WhyGridSection.module.css';

export default function WhyGridSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>

                    {/* Card 1: No Paywalls (Transparent Green Tint) */}
                    <motion.div
                        className={styles.card}
                        style={{ background: 'linear-gradient(135deg, rgba(6, 78, 59, 0.3) 0%, rgba(2, 44, 34, 0.1) 100%)', border: '1px solid rgba(52, 211, 153, 0.2)' }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.iconWrapper} style={{ background: 'rgba(52, 211, 153, 0.1)' }}>
                            <Unlock size={64} color="#34d399" />
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Free Forever.<br />No Hidden Costs.</h3>
                            <p className={styles.cardDesc}>Enjoy every feature without a paywall. High-fidelity, Spatial Audio, and Offline mode — all included.</p>
                        </div>
                    </motion.div>

                    {/* Card 2: Cross App (Transparent Blue Tint) */}
                    <motion.div
                        className={styles.card}
                        style={{ background: 'linear-gradient(135deg, rgba(30, 27, 75, 0.3) 0%, rgba(15, 23, 42, 0.1) 100%)', border: '1px solid rgba(129, 140, 248, 0.2)' }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.iconWrapper} style={{ background: 'rgba(129, 140, 248, 0.1)' }}>
                            <Smartphone size={64} color="#818cf8" />
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Syncs with<br />Everything.</h3>
                            <p className={styles.cardDesc}>Seamlessly import playlists from Spotify and YouTube. Your library, everywhere you go.</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
