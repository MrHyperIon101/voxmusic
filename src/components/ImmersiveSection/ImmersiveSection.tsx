'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './ImmersiveSection.module.css';

export default function ImmersiveSection() {
    const containerRef = useRef(null);

    // Track scroll progress relative to this section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });

    // Fade in the whole section from black
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    // Scale effect for the dancer
    const scale = useTransform(scrollYProgress, [0.1, 0.5], [0.8, 1]);

    return (
        <div ref={containerRef} className={styles.section}>
            <div className={styles.stickyContainer}>

                {/* Animated Background - Radiating Circles */}
                <motion.div className={styles.backgroundEffects} style={{ opacity }}>
                    <div className={styles.circle}></div>
                    <div className={styles.circle}></div>
                    <div className={styles.circle}></div>
                    {/* Big Glow */}
                    <div style={{
                        position: 'absolute',
                        width: '60vw',
                        height: '60vw',
                        background: 'radial-gradient(circle, rgba(120,40,200,0.3) 0%, transparent 70%)',
                        borderRadius: '50%',
                        filter: 'blur(60px)'
                    }} />
                </motion.div>

                {/* Text Overlay */}
                <motion.div style={{ opacity }} className={styles.textOverlay}>
                    <h2 className={styles.title}>A completely <br /> transformed experience.</h2>
                    <p className={styles.subtitle}>Audio performance</p>
                </motion.div>

                {/* Dancer Image */}
                <motion.div className={styles.dancerWrapper} style={{ scale, opacity }}>
                    {/* Ideally use Next.js Image, but using img for simplicity with dynamic paths if needed */}
                    <img src="/hero-dancer.png" alt="Dancer Immersive" className={styles.dancerImage} />
                </motion.div>

            </div>
        </div>
    );
}
