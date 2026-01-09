'use client';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {

    return (
        <section className={styles.container}>
            <div className={styles.imageBackground}>
                {/* Video enabled for both Desktop and Mobile */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.bgMedia}
                >
                    <source src="/hero-desktop.mp4" type="video/mp4" />
                </video>

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
                        <Link href="/download" className={styles.buyButtonLink}>
                            <button className={styles.buyButton} aria-label="Download">
                                <Download size={24} className={styles.btnIcon} />
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
