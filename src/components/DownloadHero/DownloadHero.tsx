'use client';
import { motion } from 'framer-motion';
import styles from './DownloadHero.module.css';

export default function DownloadHero({ title = "Download Voxtrona.", subtitle = "Get the ultimate audio experience on all your devices.", bgImage = "/downloadpage.jpg" }: { title?: string, subtitle?: string, bgImage?: string }) {
    return (
        <section className={styles.container}>
            {/* ... */}
            <div className={styles.imageWrapper}>
                <img src={bgImage} alt="Hero Background" className={styles.bgImage} />
                <div className={styles.fadeOverlay} />
            </div>

            <div className={styles.content}>
                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {title}
                </motion.h1>
                <motion.p
                    className={styles.subtitle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {subtitle}
                </motion.p>
            </div>

            <div className={styles.bottomFade}></div>
        </section>
    );
}
