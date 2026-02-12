'use client';
import Link from 'next/link';
import styles from './Navbar.module.css';
import StaggeredMenu from '../StaggeredMenu/StaggeredMenu';

const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'Download', ariaLabel: 'Download the app', link: '/download' },
    { label: 'Docs', ariaLabel: 'View documentation', link: '/docs' },
    { label: 'Community', ariaLabel: 'Join the community', link: '/community' },
    { label: 'Support', ariaLabel: 'Get support', link: '/support' }
];

const socialItems = [
    { label: 'Twitter', link: 'https://x.com/mrhyperionai' },
    { label: 'Instagram', link: 'https://instagram.com/mrhyperion' },
    { label: 'GitHub', link: 'https://github.com/MrHyperIon101/voxmusic' }
];

export default function Navbar() {
    return (
        <>
            {/* Separate Brand Pill - Left Aligned */}
            <Link href="/" className={styles.brandPill} style={{ zIndex: 10001 }}>
                <img src="/favicon.png" alt="Logo" className={styles.brandLogo} />
                <span className={styles.brandName}>Voxtrona</span>
            </Link>

            {/* Staggered Menu - Handles both Desktop and Mobile */}
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 10000 }}>
                <StaggeredMenu
                    position="right"
                    items={menuItems}
                    socialItems={socialItems}
                    displaySocials={true}
                    displayItemNumbering={true}
                    menuButtonColor="#eee"
                    openMenuButtonColor="#fff"
                    changeMenuColorOnOpen={true}
                    colors={['#1a1a1a', '#2a2a2a']}
                    logoUrl="/favicon.png"
                    accentColor="#007aff"
                    isFixed={true}
                />
            </div>
        </>
    );
}
