'use client';
import styles from './Footer.module.css';

import { Instagram, Github } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.topSection}>
                    <div className={styles.brandColumn}>
                        <div className={styles.brandHeader}>
                            <img src="/favicon.png" alt="Logo" className={styles.logo} />
                            <span className={styles.brandName}>Voxtrona Music</span>
                        </div>
                        <p className={styles.brandDesc}>
                            The ultimate audiophile music player.
                            <br />
                            Experience music in its purest form.
                        </p>
                        <div className={styles.socialRow}>
                            <a href="https://instagram.com/mrhyperion" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                                <Instagram size={20} />
                            </a>
                            <a href="https://github.com/MrHyperIon101" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                                <Github size={20} />
                            </a>
                        </div>
                    </div>

                    <div className={styles.linksColumn}>
                        <h4 className={styles.columnHeader}>NAVIGATION</h4>
                        <Link href="/" className={styles.columnLink}>Home</Link>
                        <a href="https://play.google.com/store/apps/details?id=com.voxtrona.music" target="_blank" rel="noopener noreferrer" className={styles.columnLink}>Download</a>
                        <Link href="/docs" className={styles.columnLink}>Docs</Link>
                        <Link href="/support" className={styles.columnLink}>Support</Link>
                    </div>
                </div>

                <div className={styles.bottomSection}>
                    <div className={styles.bottomLeft}>
                        <span className={styles.copyright}>© 2025-2028 Voxtrona Music. All rights reserved.</span>
                        <Link href="/privacy" className={styles.privacyLink}>Privacy Policy</Link>
                    </div>
                    <div className={styles.bottomRight}>
                        <span className={styles.designerCredit}>DESIGNED BY SOUVIK BAGCHI</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
