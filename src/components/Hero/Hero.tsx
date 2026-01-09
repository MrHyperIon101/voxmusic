'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile(); // Check on mount
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section className={styles.container}>
            <div className={styles.imageBackground}>
                {/* Desktop Video - Darkened via CSS */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={`${styles.bgMedia} ${styles.desktopMsg}`}
                >
                    <source src="/hero-desktop.mp4" type="video/mp4" />
                </video>

                {/* Mobile Image - Reverted to Image as requested */}
                <img
                    src="/hero-mobile.png"
                    alt="Dancer Mobile"
                    className={`${styles.bgMedia} ${styles.mobileImg}`}
                />

                {/* Dark Overlay for "Blown out" fix */}
                <div className={styles.darkOverlay}></div>

                {/* Bottom Fade to Black */}
                <div className={styles.bottomFade}></div>
            </div>

            <div className={styles.content}>
                <div className={styles.textOverlay}>
                    <div className={styles.leftControl}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h2 className={styles.productName}>Voxtrona Music</h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <h1 className={styles.headline}>High‑Fidelity.<br />Zero Compromise.</h1>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className={styles.ctaContainer}
                    >
                        <div className={styles.priceTag}>
                            <p className={styles.price}>Deploy the Core</p>
                            <p className={styles.subPrice}>Audiophile-Grade Controls</p>
                        </div>
                        <button className={styles.buyButton} aria-label="Download">
                            <Download size={24} className={styles.btnIcon} />
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
