'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Monitor, Tv, ArrowRight, Download, Info } from 'lucide-react';
import styles from './UniversalDownloadCard.module.css';

import BetaModal from '../BetaModal/BetaModal';

// Custom Brand Logos
const AndroidLogo = ({ size = 24, color = "currentColor" }: { size?: number, color?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
        <path d="M17.523 15.3414c.551 0 .998-.447.998-.999 0-.551-.447-.997-.998-.997-.551 0-.998.446-.998.997 0 .552.447.999.998.999zm-11.046 0c.551 0 .998-.447.998-.999 0-.551-.447-.997-.998-.997-.551 0-.998.446-.998.997 0 .552.447.999.998.999zM7.005 3.504L5.65 1.157c-.146-.251-.466-.339-.718-.192-.252.146-.339.467-.193.719l1.378 2.387C3.996 5.253 2.474 7.234 2.128 9.529h19.742c-.346-2.295-1.868-4.276-3.989-5.458l1.379-2.386c.146-.252.059-.573-.193-.72-.252-.146-.572-.058-.718.193l-1.355 2.346c-1.428-.737-3.033-1.157-4.736-1.157-1.704 0-3.309.42-4.737 1.157z" />
        <path d="M2.128 11.22c.288 3.125 2.946 5.567 6.176 5.567h7.391c3.23 0 5.889-2.442 6.177-5.567H2.128Z" />
    </svg>
);

const WindowsLogo = ({ size = 24, color = "currentColor" }: { size?: number, color?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H11.377V11.377H0V0ZM12.623 0H24V11.377H12.623V0ZM0 12.623H11.377V24H0V12.623ZM12.623 12.623H24V24H12.623V12.623Z" fill={color} />
    </svg>
);

const platforms = [
    {
        id: 'android',
        label: 'Android',
        icon: AndroidLogo,
        color: '#a4c639',
        title: 'Android',
        version: 'Codename Orion (v2.3.2026)',
        description: 'The complete high requirements audio experience. Native Spatial Audio, Bit-Perfect playback, and Material You design.',
        image: '/download_android_hero_style_1768129774752.png',
        features: [
            { label: 'Spatial Audio', value: 'Meridian Audio + Native' },
            { label: 'Latency', value: 'Low Latency (<20ms)' },
            { label: 'Format', value: 'FLAC / WAV / DSD' },
            { label: 'Requirement', value: 'Android 12+' },
        ],
        primaryAction: {
            label: 'Download APK',
            href: 'https://github.com/MrHyperIon101/voxmusic/releases/download/3M-Special/Codename-Orion.Release.apk',
            active: true
        },
        secondaryAction: {
            label: 'Join Beta',
            active: true
        }
    },
    {
        id: 'windows',
        label: 'Windows',
        icon: WindowsLogo,
        color: '#0078d7',
        title: 'Windows',
        version: 'v0.9.5 Beta',
        description: 'Unleash your desktop dac. Full ASIO driver support, exclusive mode, and VST plugin integration.',
        image: '/download_windows_hero_style_1768129836015.png',
        features: [
            { label: 'Audio Engine', value: '64-bit Floating Point' },
            { label: 'Output', value: 'ASIO / WASAPI Exclusive' },
            { label: 'Plugins', value: 'VST3 Support' },
            { label: 'OS', value: 'Windows 10/11' },
        ],
        primaryAction: {
            label: 'Download Beta',
            href: '#',
            active: false
        },
        secondaryAction: {
            label: 'Join Waitlist',
            active: true
        }
    },
    {
        id: 'tv',
        label: 'Smart TV',
        icon: Tv,
        color: '#e50914',
        title: 'Smart TV',
        version: 'In Development',
        description: 'Cinematic audio in your living room. Optimized for remote control navigation and home theater systems.',
        image: '/download_tv_hero_style_1768129809680.png',
        features: [
            { label: 'Passthrough', value: 'Dolby TrueHD / DTS-HD' },
            { label: 'Interface', value: '10-foot UI' },
            { label: 'Connect', value: 'Voxtrona Connect' },
            { label: 'OS', value: 'Android TV / Google TV' },
        ],
        primaryAction: {
            label: 'Notify Me',
            href: '#',
            active: false
        },
        secondaryAction: {
            label: 'Newsletter',
            active: true
        }
    }
];

export default function UniversalDownloadCard() {
    const [activeTab, setActiveTab] = useState('android');
    const [isBetaOpen, setIsBetaOpen] = useState(false);
    const currentPlatform = platforms.find(p => p.id === activeTab) || platforms[0];

    const openBeta = () => {
        setIsBetaOpen(true);
    };

    return (
        <section className={styles.section}>
            <div className={styles.card}>
                {/* Left: Visual */}
                <div className={styles.visualSide}>
                    <AnimatePresence>
                        <motion.img
                            key={activeTab}
                            src={currentPlatform.image}
                            alt={`${currentPlatform.label} Visual`}
                            className={styles.heroImage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        />
                    </AnimatePresence>
                </div>

                {/* Right: Content */}
                <div className={styles.contentSide}>
                    {/* Platform Tabs */}
                    <div className={styles.tabs}>
                        {platforms.map((p) => (
                            <button
                                key={p.id}
                                onClick={() => setActiveTab(p.id)}
                                className={`${styles.tab} ${activeTab === p.id ? styles.activeTab : ''}`}
                                style={activeTab === p.id ? { borderColor: p.color, color: p.color, background: 'rgba(255,255,255,0.08)' } : {}}
                            >
                                <p.icon size={16} color={activeTab === p.id ? p.color : 'currentColor'} />
                                <span style={{ fontWeight: 600 }}>{p.label}</span>
                            </button>
                        ))}
                    </div>

                    {/* Animated Content */}
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={activeTab}
                            className={styles.platformContent}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className={styles.header}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                                    <span className={`${styles.versionBadge} ${currentPlatform.id === 'windows' ? styles.badgeBeta :
                                        currentPlatform.id === 'tv' ? styles.badgeWaitlist : ''
                                        }`}>
                                        {currentPlatform.version}
                                    </span>
                                </div>
                                <h2 className={styles.title}>{currentPlatform.title}</h2>
                                <p className={styles.description}>{currentPlatform.description}</p>
                            </div>

                            <div className={styles.features}>
                                {currentPlatform.features.map((feat, idx) => (
                                    <div key={idx} className={styles.featureItem}>
                                        <span className={styles.featLabel}>{feat.label}</span>
                                        <span className={styles.featValue}>{feat.value}</span>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.actions}>
                                {currentPlatform.primaryAction.active ? (
                                    <a href={currentPlatform.primaryAction.href} className={styles.mainBtn}>
                                        <Download size={20} />
                                        {currentPlatform.primaryAction.label}
                                    </a>
                                ) : (
                                    <button className={`${styles.mainBtn} ${styles.disabledBtn}`} disabled>
                                        {currentPlatform.primaryAction.label}
                                    </button>
                                )}

                                <button
                                    onClick={openBeta}
                                    className={styles.secondaryBtn}
                                >
                                    {currentPlatform.secondaryAction.label}
                                </button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <BetaModal
                isOpen={isBetaOpen}
                onClose={() => setIsBetaOpen(false)}
                platform={currentPlatform.label}
            />
        </section>
    );
}
