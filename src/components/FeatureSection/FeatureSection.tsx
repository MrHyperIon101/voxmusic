'use client';
import { motion } from 'framer-motion';
import { Globe, ArrowUpRight, PlayCircle } from 'lucide-react';
import styles from './FeatureSection.module.css';

export default function FeatureSection() {
    return (
        <section className={styles.container}>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={styles.card}
            >
                <div className={styles.backgroundGlow}></div>
                <div className={styles.content}>
                    <div className={styles.iconWrapper}>
                        <Globe size={32} color="white" strokeWidth={1.5} />
                    </div>

                    <div className={styles.textGroup}>
                        <h2 className={styles.plainTitle}>
                            Experience spatial audio <br className={styles.breakOnDesktop} />
                            with Dolby Atmos.
                        </h2>
                    </div>

                    <div className={styles.infoGroup}>
                        <a
                            href="https://www.youtube.com/watch?v=91BUM3WhCfo&pp=ygUGZG9sYnkg"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.exploreBtn}
                        >
                            Watch the film <PlayCircle size={16} />
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
