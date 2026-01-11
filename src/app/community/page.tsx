'use client';
import { motion } from 'framer-motion';
import { Twitter, Github, Instagram, ArrowRight } from 'lucide-react';
import styles from './community.module.css';
import Navbar from '@/components/Navbar/Navbar';

const socials = [
    {
        label: 'Twitter (X)',
        desc: 'Follow @mrhyperionai for development updates and announcements.',
        icon: Twitter,
        href: 'https://x.com/mrhyperionai',
        highlight: true
    },
    {
        label: 'GitHub',
        desc: 'View source code, report bugs, and contribute to the project.',
        icon: Github,
        href: 'https://github.com/MrHyperIon101/voxmusic',
        highlight: false
    },
    {
        label: 'Instagram',
        desc: 'Behind the scenes looks and visual updates.',
        icon: Instagram,
        href: 'https://instagram.com/mrhyperion',
        highlight: false
    }
];

export default function CommunityPage() {
    return (
        <main className={styles.section}>
            <Navbar />

            <div className={styles.background}>
                <img src="/hero-dancer.png" alt="" className={styles.bgImage} />
            </div>

            <div className={styles.content}>
                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    Join the Core.
                </motion.h1>

                <motion.p
                    className={styles.description}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    Connect with the developer and the community. Get the latest news, updates, and sneak peeks of upcoming features.
                </motion.p>

                <div className={styles.grid}>
                    {socials.map((social, idx) => (
                        <motion.a
                            key={idx}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
                        >
                            <div className={styles.iconWrapper}>
                                <social.icon size={24} />
                            </div>
                            <h3 className={styles.cardTitle}>{social.label}</h3>
                            <p className={styles.cardDesc}>{social.desc}</p>
                            <ArrowRight className={styles.arrow} size={20} />
                        </motion.a>
                    ))}
                </div>
            </div>
        </main>
    );
}
