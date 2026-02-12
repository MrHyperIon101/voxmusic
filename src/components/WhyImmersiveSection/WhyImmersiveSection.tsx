'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './WhyImmersiveSection.module.css';

export default function WhyImmersiveSection() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0.1, 0.5], [0.8, 1]);

    return (
        <div ref={containerRef} className={styles.section}>
            <div className={styles.stickyContainer}>

                {/* Animated Background - Radiating Cyan Circles */}
                <motion.div className={styles.backgroundEffects} style={{ opacity }}>
                    <div className={styles.circle}></div>
                    <div className={styles.circle}></div>
                    <div className={styles.circle}></div>
                    <div style={{
                        position: 'absolute',
                        width: '60vw',
                        height: '60vw',
                        background: 'radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 70%)',
                        borderRadius: '50%',
                        filter: 'blur(60px)'
                    }} />
                </motion.div>

                {/* Text Overlay */}
                <motion.div style={{ opacity }} className={styles.textOverlay}>
                    <h2 className={styles.title}>Why Voxtrona <br /> is the best.</h2>
                    <p className={styles.subtitle}>Unmatched features.</p>
                </motion.div>



            </div>
        </div>
    );
}
