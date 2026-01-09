'use client';
import { motion } from 'framer-motion';
import { Cpu, Mic, Zap, BarChart3 } from 'lucide-react';
import styles from './BentoGridSection.module.css';

export default function BentoGridSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>

                    {/* Card 1: LDAC / Hi-Res (White Card) */}
                    <motion.div
                        className={`${styles.card} ${styles.chipCard}`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.chipGlow} style={{ background: '#f5f5f5', boxShadow: '0 0 40px rgba(0,0,0,0.1)' }}>
                            {/* Simulating an LDAC badge with text/icon */}
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                                <span style={{ fontSize: '28px', fontWeight: '900', color: '#000', letterSpacing: '-1px' }}>LDAC</span>
                                <div style={{ height: '2px', width: '40px', background: '#d4af37' }}></div>
                                <span style={{ fontSize: '10px', fontWeight: '600', color: '#666', letterSpacing: '2px' }}>HI-RES AUDIO</span>
                            </div>
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle} style={{ color: '#000' }}>Lossless Streaming.</h3>
                            <p style={{ color: '#444' }}>Experience music as the artist intended with 990kbps LDAC support.</p>
                        </div>
                    </motion.div>

                    {/* Card 2: Spatial Audio (Purple/Blue Gradient) */}
                    <motion.div
                        className={styles.card}
                        style={{ background: 'linear-gradient(135deg, #240b36 0%, #c31432 100%)' }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                            <div style={{ position: 'absolute', width: '150px', height: '150px', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%' }}></div>
                            <div style={{ position: 'absolute', width: '200px', height: '200px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%' }}></div>
                            <Zap size={80} color="#fff" fill="white" />
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Spatial Audio.</h3>
                            <p className={styles.cardDesc}>Dolby Atmos, Dirac, and DTS:X compatible for immersive surround sound.</p>
                        </div>
                    </motion.div>

                    {/* Card 3: Head Tracking (Dark/Green) */}
                    <motion.div
                        className={styles.card}
                        style={{ background: '#0a0a0a', border: '1px solid #222' }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <motion.div
                                animate={{ rotateX: [0, 20, 0, -20, 0], rotateY: [0, 15, 0, -15, 0] }}
                                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                            >
                                <Cpu size={100} color="#22c55e" />
                            </motion.div>
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Dynamic Head Tracking.</h3>
                            <p className={styles.cardDesc}>Sound that stays fixed to your device even when you look away.</p>
                        </div>
                    </motion.div>

                    {/* Card 4: Community Stats (Orange/Gold) */}
                    <motion.div
                        className={styles.card}
                        style={{ background: 'linear-gradient(to bottom right, #f59e0b, #d97706)' }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                            <span style={{ fontSize: '56px', fontWeight: '800', color: '#fff', lineHeight: 1 }}>3M+</span>
                            <span style={{ fontSize: '14px', fontWeight: '600', color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase' }}>Downloads</span>

                            <div style={{ width: '50px', height: '2px', background: 'rgba(255,255,255,0.4)', margin: '16px 0' }}></div>

                            <span style={{ fontSize: '32px', fontWeight: '700', color: '#fff', lineHeight: 1 }}>500K+</span>
                            <span style={{ fontSize: '12px', fontWeight: '600', color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase' }}>Daily Active Users</span>
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle} style={{ marginTop: '16px' }}>Join the Revolution.</h3>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
