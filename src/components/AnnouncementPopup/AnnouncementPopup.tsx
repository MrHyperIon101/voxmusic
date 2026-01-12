'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import styles from './AnnouncementPopup.module.css';

const PlayStoreLogo = ({ size = 24 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.5 2.5L19.5 12L4.5 21.5V2.5Z" fill="#fff" />
        <path d="M22.2 12L16.2 15.6L14.7 12L16.2 8.4L22.2 12Z" fill="#FFC107" />
        <path d="M16.2 15.6L4.5 21.5L14.7 12L16.2 15.6Z" fill="#F44336" />
        <path d="M16.2 8.4L14.7 12L4.5 2.5L16.2 8.4Z" fill="#4CAF50" />
        <path d="M4.5 2.5V21.5L14.7 12L4.5 2.5Z" fill="#2196F3" />
    </svg>
);

export default function AnnouncementPopup() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if already seen in this session
        const hasSeenPopup = sessionStorage.getItem('hasSeenAnnouncement');
        if (!hasSeenPopup) {
            // Small delay for better UX
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        sessionStorage.setItem('hasSeenAnnouncement', 'true');
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className={styles.overlay}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleClose} // Close on backdrop click
                >
                    <motion.div
                        className={styles.popup}
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
                        style={{ maxWidth: '400px', textAlign: 'center', paddingTop: '40px' }}
                    >
                        <button onClick={handleClose} className={styles.closeBtn}>
                            <X size={20} />
                        </button>

                        <div style={{ margin: '0 0 24px 0', display: 'flex', justifyContent: 'center' }}>
                            <PlayStoreLogo size={96} />
                        </div>

                        <div style={{ padding: '0 32px 32px 32px', textAlign: 'center' }}>
                            <h3 style={{ color: '#fff', fontSize: '24px', fontWeight: 800, marginBottom: '8px' }}>
                                Available Now
                            </h3>
                            <p style={{ color: '#aaa', marginBottom: '24px', fontSize: '15px', lineHeight: 1.5 }}>
                                Download Voxtrona Music directly from the Google Play Store or get the APK.
                            </p>
                            <a href="/download" className={styles.ctaBtn} onClick={handleClose}>
                                Download
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
