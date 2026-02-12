'use client';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import DownloadHero from '@/components/DownloadHero/DownloadHero';
import styles from './privacy.module.css';
import { motion } from 'framer-motion';

export default function PrivacyPage() {
    return (
        <main className={styles.main}>
            <Navbar />
            <DownloadHero
                title="Privacy Policy."
                subtitle="Your data stays yours. Always."
                bgImage="/privacy.jpg"
            />

            <div className={styles.contentContainer}>
                <motion.div
                    className={styles.textBlock}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.lastUpdated}>Last updated: January 1, 2026</div>

                    <div className={styles.section}>
                        <h2 className={styles.heading}>1. Introduction</h2>
                        <p className={styles.paragraph}>
                            Voxtrona ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how our application operates and how it handles your information. Our core philosophy is privacy-by-design, ensuring that your data remains yours and stays on your device.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.heading}>2. Data Collection and Storage</h2>
                        <p className={styles.paragraph}>
                            We do not collect, store, or transmit any of your personal data to our servers. Voxtrona operates as a local-first application. All application data, including your library, playlists, settings, and preferences, is stored locally on your device. We do not maintain a database of user information, and we have no access to your usage patterns or personal details.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.heading}>3. Third-Party Services</h2>
                        <p className={styles.paragraph}>
                            Voxtrona integrates with third-party music services to provide content. These integrations operate directly between your device and the respective service providers.
                        </p>

                        <h3 className={styles.subHeading}>YouTube Music</h3>
                        <p className={styles.paragraph}>
                            When you sign in to your YouTube Music account through Voxtrona, your authentication credentials are processed locally on your device. The application communicates directly with YouTube Music APIs to fetch your library and stream content. We do not intercept, store, or have access to your Google account credentials or your listening history.
                        </p>

                        <h3 className={styles.subHeading}>Spotify</h3>
                        <p className={styles.paragraph}>
                            Similarly, Spotify integration is handled locally. Authentication tokens are stored securely on your device and are used solely to communicate with Spotify's servers from your local machine. We do not collect data regarding your Spotify account or activity.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.heading}>4. Local Processing</h2>
                        <p className={styles.paragraph}>
                            All audio processing, including equalization, spatial audio effects, and analysis, is performed locally on your device's hardware. No audio data is uploaded to the cloud for processing. This ensures both low latency and complete privacy of your listening experience.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.heading}>5. Changes to This Policy</h2>
                        <p className={styles.paragraph}>
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.heading}>6. Contact Us</h2>
                        <p className={styles.paragraph}>
                            If you have any questions about this Privacy Policy, please contact us via our support channels or community forums.
                        </p>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </main>
    );
}
