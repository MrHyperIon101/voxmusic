'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Disc3, AudioWaveform, Layout, LibraryBig, Telescope, Radio, CheckCircle2 } from 'lucide-react';
import styles from './HighlightsSection.module.css';

const highlights = [
    {
        id: 1,
        title: 'CORE PLAYBACK',
        description: 'The heart of your listening experience. Stream directly with high-fidelity.',
        icon: 'playback',
        color: '#2997FF', // Pro Blue
        features: [
            'Voxtrona Streaming Integration',
            'High-Quality Audio (up to FLAC)',
            'Background Playback & PiP',
            'Smart Crossfade & Gapless',
            'Speed & Pitch Control'
        ]
    },
    {
        id: 2,
        title: 'AUDIO FX',
        description: 'Sculpt your sound with professional-grade tools.',
        icon: 'audiofx',
        color: '#FFD60A', // Premium Gold
        features: [
            'Multi-band Equalizer & Presets',
            'Bass Boost & Virtualizer',
            'Native Spatial Audio (Android 13+)',
            'Head Tracking Support',
            'Dirac Live Compatibility'
        ]
    },
    {
        id: 3,
        title: 'INTERFACE',
        description: 'A stunning Liquid Glass UI that adapts to your music.',
        icon: 'interface',
        color: '#E0E0E0', // Silver/White (Clean UI)
        features: [
            'Liquid Glass Design System',
            'Dynamic Album Art Gradients',
            'Pure Black Dark Theme (OLED)',
            'Translucent Blur Effects',
            'Swipe-Gesture Mini Player'
        ]
    },
    {
        id: 4,
        title: 'LIBRARY',
        description: 'Your entire collection, organized and synced.',
        icon: 'library',
        color: '#30D158', // Deep Vibrant Green (Pro)
        features: [
            'Local & Offline Management',
            'YouTube & Spotify Sync',
            'Offline Caching & Downloads',
            'Smart Podcast Support',
            'Auto-Tagging'
        ]
    },
    {
        id: 5,
        title: 'DISCOVERY',
        description: 'Find your next obsession with personalized feeds.',
        icon: 'discovery',
        color: '#BF5AF2', // Deep Purple
        features: [
            'Personalized Home Feed',
            'Mood & Genre Playlists',
            'Global & Regional Charts',
            'New Releases & Quick Picks',
            'Daily Mixes'
        ]
    },
    {
        id: 6,
        title: 'INTEGRATION',
        description: 'Seamlessly connect your favorite platforms.',
        icon: 'integration',
        color: '#FF375F', // Modern Red/Pink
        features: [
            'YouTube Music Integration',
            'Spotify Playlist Import',
            'Unified Search Results',
            'Ad-Free Experience',
            'Cloud Library Sync'
        ]
    }
];

export default function HighlightsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % highlights.length);
    };

    useEffect(() => {
        if (isPlaying) {
            timerRef.current = setInterval(nextSlide, 3000); // 3 seconds per slide
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isPlaying]);

    const togglePlay = () => setIsPlaying(!isPlaying);

    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <h2 className={styles.headline}>Get the highlights.</h2>

                <div className={styles.carouselContainer}>
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                            className={styles.card}
                        >
                            <div className={styles.cardContent}>
                                <div className={styles.leftCol}>
                                    <div className={styles.iconContainer} style={{ color: highlights[currentIndex].color }}>
                                        {highlights[currentIndex].icon === 'playback' && (
                                            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 8, ease: "linear" }}>
                                                <Disc3 size={100} strokeWidth={1} />
                                            </motion.div>
                                        )}
                                        {highlights[currentIndex].icon === 'audiofx' && (
                                            <motion.div animate={{ scaleY: [1, 1.4, 1, 0.9, 1] }} transition={{ repeat: Infinity, duration: 1.8 }}>
                                                <AudioWaveform size={100} strokeWidth={1} />
                                            </motion.div>
                                        )}
                                        {highlights[currentIndex].icon === 'interface' && (
                                            <motion.div animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.02, 1] }} transition={{ repeat: Infinity, duration: 4 }}>
                                                <Layout size={100} strokeWidth={1} />
                                            </motion.div>
                                        )}
                                        {highlights[currentIndex].icon === 'library' && (
                                            <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 2.5 }}>
                                                <LibraryBig size={100} strokeWidth={1} />
                                            </motion.div>
                                        )}
                                        {highlights[currentIndex].icon === 'discovery' && (
                                            <motion.div animate={{ rotate: [0, 10, 0, -10, 0] }} transition={{ repeat: Infinity, duration: 6 }}>
                                                <Telescope size={100} strokeWidth={1} />
                                            </motion.div>
                                        )}
                                        {highlights[currentIndex].icon === 'integration' && (
                                            <motion.div animate={{ scale: [1, 1.08, 1], opacity: [0.85, 1, 0.85] }} transition={{ repeat: Infinity, duration: 2.2 }}>
                                                <Radio size={100} strokeWidth={1} />
                                            </motion.div>
                                        )}
                                    </div>
                                    <div className={styles.textHeader}>
                                        <h3 className={styles.cardTitle}>{highlights[currentIndex].title}</h3>
                                        <p className={styles.cardDesc}>{highlights[currentIndex].description}</p>
                                    </div>
                                </div>

                                <div className={styles.divider}></div>

                                <div className={styles.featureList}>
                                    {highlights[currentIndex].features.map((feature, i) => (
                                        <motion.div
                                            key={i}
                                            className={styles.featureItem}
                                            initial={{ opacity: 0, x: 10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.05 * i }}
                                        >
                                            <CheckCircle2 size={16} className={styles.checkIcon} style={{ color: highlights[currentIndex].color }} strokeWidth={2} />
                                            <span>{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className={styles.controls}>
                    <div className={styles.indicators}>
                        {highlights.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setCurrentIndex(index);
                                    // Removed setIsPlaying(false) to keep slideshow enabled
                                }}
                                className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                                style={{ backgroundColor: index === currentIndex ? highlights[index].color : 'rgba(255,255,255,0.2)' }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
