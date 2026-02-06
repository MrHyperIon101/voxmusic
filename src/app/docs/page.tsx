'use client';

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar/Navbar";
import DownloadHero from "@/components/DownloadHero/DownloadHero";
import {
    BookOpenText, Shield, Cog, Music2, Download, Headphones,
    Radio, Smartphone, Laptop, Zap, Lock, Cloud, HardDrive,
    Settings, Volume2, Waves, Sparkles, Globe, Users,
    PlayCircle, Search, ChevronRight, Code, Terminal, Database,
    Sliders, Cpu, Gauge, FileAudio, Layers, Box, ArrowRight, Layout, Languages, Clock, Heart, Palette, Moon, Mic
} from "lucide-react";
import styles from './docs.module.css';

const sections = [
    {
        id: "introduction",
        title: "Introduction",
        icon: BookOpenText,
        subsections: ["What is Voxtrona?", "Key Features", "Supported Platforms"]
    },
    {
        id: "getting-started",
        title: "Getting Started",
        icon: Download,
        subsections: ["Installation", "First Launch"]
    },
    {
        id: "core-playback",
        title: "Core Playback",
        icon: PlayCircle,
        subsections: ["Audio Quality", "Playback Controls", "Gapless & Crossfade"]
    },
    {
        id: "audio-enhancements",
        title: "Audio Enhancements",
        icon: Waves,
        subsections: ["Spatial Audio", "Equalizer & Effects"]
    },
    {
        id: "lyrics",
        title: "Lyrics",
        icon: Music2,
        subsections: ["Synced Lyrics", "Spotify Canvas"]
    },
    {
        id: "library",
        title: "Library & Playlists",
        icon: Database,
        subsections: ["Library Management", "Offline Caching"]
    },
    {
        id: "discovery",
        title: "Home & Discovery",
        icon: Globe,
        subsections: ["Personalized Feed", "Charts & Trends"]
    },
    {
        id: "interface",
        title: "Interface",
        icon: Layout,
        subsections: ["Liquid Glass UI", "Theming"]
    },
    {
        id: "settings",
        title: "Settings & Accounts",
        icon: Settings,
        subsections: ["Integrations", "Privacy & Data"]
    },
    {
        id: "localization",
        title: "Localization",
        icon: Languages,
        subsections: ["Global Support"]
    },
    {
        id: "troubleshooting",
        title: "Troubleshooting",
        icon: Terminal,
        subsections: ["Common Issues", "Performance Tips", "Support"]
    }
];

const quickLinks = [
    { label: "Download App", icon: Download, href: "https://play.google.com/store/apps/details?id=com.voxtrona.music" },
    { label: "Report Bug", icon: Code, href: "/support" },
    { label: "Community", icon: Users, href: "/community" },
    { label: "Support", icon: Shield, href: "/support" },
];

export default function DocsPage() {
    const [activeSection, setActiveSection] = useState("introduction");
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [showResults, setShowResults] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i].id);
                if (section) {
                    if (scrollPosition >= section.offsetTop) {
                        setActiveSection(sections[i].id);
                        break;
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        if (query.length < 2) {
            setSearchResults([]);
            setShowResults(false);
            return;
        }
        const results: any[] = [];
        const queryLower = query.toLowerCase();
        sections.forEach((section) => {
            if (section.title.toLowerCase().includes(queryLower)) {
                results.push({
                    type: "section",
                    title: section.title,
                    href: `#${section.id}`,
                    icon: section.icon,
                });
            }
            section.subsections?.forEach((subsection) => {
                if (subsection.toLowerCase().includes(queryLower)) {
                    results.push({
                        type: "subsection",
                        title: subsection,
                        parent: section.title,
                        href: `#${section.id}-${subsection.toLowerCase().replace(/\s+/g, "-")}`,
                        icon: section.icon,
                    });
                }
            });
        });
        setSearchResults(results);
        setShowResults(results.length > 0);
    };

    return (
        <main className={styles.pageContainer}>
            <Navbar />
            <div style={{ marginBottom: '-100px', position: 'relative', zIndex: 1 }}>
                <DownloadHero title="Docs." subtitle="Master the Music." bgImage="/docs.jpg" />
            </div>

            <div className={styles.maxWidthWrapper} style={{ marginTop: '0px' }}>
                <div className={styles.searchContainer} style={{ marginBottom: '64px' }}>
                    <Search className={styles.searchIcon} size={20} />
                    <input
                        type="text"
                        placeholder="Search documentation..."
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                        onFocus={() => searchResults.length > 0 && setShowResults(true)}
                        onBlur={() => setTimeout(() => setShowResults(false), 200)}
                        className={styles.searchInput}
                    />
                    <div className={styles.kbd}>Ctrl K</div>
                    <AnimatePresence>
                        {showResults && searchResults.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className={styles.searchResults}
                            >
                                <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                                    {searchResults.map((result, idx) => (
                                        <a
                                            key={idx}
                                            href={result.href}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setShowResults(false);
                                                const targetId = result.href.replace('#', '');
                                                const element = document.getElementById(targetId);
                                                if (element) {
                                                    const offset = 120;
                                                    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                                                    window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
                                                }
                                                // Optional: Set active section based on parent if needed
                                                // setActiveSection(...)
                                            }}
                                            className={styles.searchResultItem}
                                        >
                                            <result.icon size={18} color="#ffffff" />
                                            <div>
                                                <div style={{ fontWeight: 600, color: '#fff' }}>{result.title}</div>
                                                {result.parent && <div style={{ fontSize: '12px', color: '#9ca3af' }}>{result.parent}</div>}
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className={styles.quickLinksGrid}>
                    {quickLinks.map((link, i) => (
                        <motion.a
                            key={i}
                            href={link.href}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={styles.quickLinkCard}
                        >
                            <div className={styles.quickLinkContent}>
                                <link.icon className={styles.cardIcon} size={24} />
                                <div className={styles.quickLinkTitle}>{link.label}</div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <div className={styles.mainLayout}>
                    {/* Sidebar */}
                    <aside className={styles.sidebar}>
                        {sections.map((section) => (
                            <div key={section.id}>
                                <a
                                    href={`#${section.id}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const element = document.getElementById(section.id);
                                        if (element) {
                                            const offset = 120;
                                            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                                            window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
                                        }
                                        setActiveSection(section.id);
                                    }}
                                    className={`${styles.sidebarLink} ${activeSection === section.id ? styles.sidebarLinkActive : ''}`}
                                >
                                    <section.icon size={18} />
                                    {section.title}
                                </a>
                                {activeSection === section.id && section.subsections && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        className={styles.subLinks}
                                    >
                                        {section.subsections.map((sub, idx) => (
                                            <a
                                                key={idx}
                                                href={`#${section.id}-${sub.toLowerCase().replace(/\s+/g, "-")}`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    const id = `${section.id}-${sub.toLowerCase().replace(/\s+/g, "-")}`;
                                                    const element = document.getElementById(id);
                                                    if (element) {
                                                        const offset = 120;
                                                        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                                                        window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
                                                    }
                                                }}
                                                className={styles.subLink}
                                            >
                                                {sub}
                                            </a>
                                        ))}
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </aside>

                    {/* Content */}
                    <div className={styles.contentArea}>

                        {/* Introduction */}
                        <DocSection id="introduction" icon={BookOpenText} title="Introduction">
                            <DocSubsection title="What is Voxtrona?" id="introduction-what-is-voxtrona?">
                                <p className={styles.paragraph}>
                                    Voxtrona is a cutting-edge YouTube Music client for Android, engineered for audiophiles who demand the best.
                                    It combines the vast catalog of YouTube with a custom high-fidelity listening engine, offering features like
                                    Native Spatial Audio, Synced Lyrics, and an immersive Liquid Glass interface that feels alive.
                                </p>
                                <div className={styles.grid3}>
                                    <FeatureCard icon={Smartphone} title="Native Android" description="Built with Kotlin & Jetpack Compose" />
                                    <FeatureCard icon={Waves} title="Hi-Res Audio" description="Custom Audio Engine" />
                                    <FeatureCard icon={Lock} title="Privacy Core" description="Zero Telemetry & SponsorBlock" />
                                </div>
                            </DocSubsection>

                            <DocSubsection title="Key Features" id="introduction-key-features">
                                <div className={styles.featureList}>
                                    <FeatureItem icon={Music2} title="YouTube Music Integration" description="Stream millions of songs directly from YouTube Music with account sync." />
                                    <FeatureItem icon={Headphones} title="Native Spatial Audio" description="Immersive 3D audio via Android Spatializer API with Head Tracking support." />
                                    <FeatureItem icon={FileAudio} title="Unified Library" description="Merge local tracks, YouTube playlists, and Spotify collections in one place." />
                                    <FeatureItem icon={Palette} title="Liquid Glass Interface" description="Stunning OLED-optimized UI with dynamic blur and mesh gradients." />
                                    <FeatureItem icon={Mic} title="Synced Lyrics & AI" description="Real-time lyrics from multiple sources with AI translation capabilities." />
                                    <FeatureItem icon={Shield} title="Community Tools" description="Integrated SponsorBlock, ReturnYouTubeDislike, and background playback." />
                                </div>
                            </DocSubsection>

                            <DocSubsection title="Supported Platforms" id="introduction-supported-platforms">
                                <div className={styles.grid3}>
                                    <PlatformCard icon={Smartphone} title="Android" status="Official Available" statusColor="green" />
                                    <PlatformCard icon={Laptop} title="Windows" status="Coming Q2 2026" statusColor="yellow" />
                                    <PlatformCard icon={Laptop} title="macOS" status="Coming Soon" statusColor="yellow" />
                                </div>
                            </DocSubsection>
                        </DocSection>

                        {/* Getting Started */}
                        <DocSection id="getting-started" icon={Download} title="Getting Started">
                            <DocSubsection title="Installation" id="getting-started-installation">
                                <AlertBox
                                    type="green"
                                    icon={Smartphone}
                                    title="Official Release Available"
                                >
                                    <p style={{ marginBottom: '16px', color: '#ccc' }}>
                                        Voxtrona is currently available for Android devices (Android 12+).
                                        Download the latest stable APK to get started.
                                    </p>
                                    <a href="https://play.google.com/store/apps/details?id=com.voxtrona.music" target="_blank" rel="noopener noreferrer" className={styles.btnDownload}>
                                        <Download size={18} /> Download Official Release
                                    </a>
                                </AlertBox>
                            </DocSubsection>

                            <DocSubsection title="First Launch" id="getting-started-first-launch">
                                <p className={styles.paragraph}>
                                    Upon first launch, Voxtrona will guide you through a quick setup process.
                                </p>
                                <div className={styles.grid3}>
                                    <FeatureCard icon={Lock} title="Permissions" description="Grant generic permissions for Notifications and File Access (for local library)." />
                                    <FeatureCard icon={Users} title="Account Login" description="Log in with your Google account for YouTube Music or Spotify account for integration." />
                                    <FeatureCard icon={Headphones} title="Face Scan (Optional)" description="For Spatial Audio users, set up your HRTF profile using the camera wizard." />
                                </div>
                            </DocSubsection>
                        </DocSection>

                        {/* Core Playback */}
                        <DocSection id="core-playback" icon={PlayCircle} title="Core Playback">
                            <DocSubsection title="Audio Quality" id="core-playback-audio-quality">
                                <p className={styles.paragraph}>
                                    Voxtrona offers configurable audio quality settings to balance data usage and fidelity.
                                </p>
                                <div className={styles.qualityGrid}>
                                    <QualityCard label="Low" detail="96kbps" color="red" />
                                    <QualityCard label="Medium" detail="160kbps" color="orange" />
                                    <QualityCard label="High" detail="320kbps" color="green" />
                                    <QualityCard label="Ultra" detail="FLAC" color="purple" />
                                </div>
                            </DocSubsection>

                            <DocSubsection title="Playback Controls" id="core-playback-playback-controls">
                                <div className={styles.featureList}>
                                    <FeatureItem icon={PlayCircle} title="Background Playback" description="Listen to music while using other apps or with the screen off." />
                                    <FeatureItem icon={Box} title="Picture-in-Picture (PiP)" description="Watch music videos in a floating window while multitasking." />
                                    <FeatureItem icon={Sliders} title="Speed & Pitch" description="Adjust playback tempo and pitch independently for learning or fun." />
                                    <FeatureItem icon={Volume2} title="Normalize Volume" description="Automatically adjust volume to maintain consistent levels across tracks." />
                                </div>
                            </DocSubsection>

                            <DocSubsection title="Gapless & Crossfade" id="core-playback-gapless-&-crossfade">
                                <div className={styles.grid2}>
                                    <FeatureCard icon={Layers} title="Gapless Playback" description="Seamless transitions between tracks in an album, perfect for live recordings." />
                                    <FeatureCard icon={Waves} title="Smart Crossfade" description="Smoothly fade between tracks with configurable duration for a radio-like experience." />
                                </div>
                            </DocSubsection>
                        </DocSection>

                        {/* Audio Enhancements */}
                        <DocSection id="audio-enhancements" icon={Waves} title="Audio Enhancements">
                            <DocSubsection title="Spatial Audio" id="audio-enhancements-spatial-audio">
                                <AlertBox type="blue" icon={Headphones} title="Premium Spatial Audio">
                                    <p style={{ color: '#ccc', marginBottom: '12px' }}>
                                        Integration with Meridian Audio's advanced spatial processing technology for studio-grade 3D audio.
                                        Android 13+ users also benefit from native Spatializer API support with head tracking on compatible headphones.
                                    </p>
                                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                        <div className={styles.tag}>Meridian Audio</div>
                                        <div className={styles.tag}>Android Spatializer</div>
                                        <div className={styles.tag}>Head Tracking</div>
                                    </div>
                                </AlertBox>
                            </DocSubsection>
                            <DocSubsection title="Equalizer & Effects" id="audio-enhancements-equalizer-&-effects">
                                <div className={styles.featureList}>
                                    <FeatureItem icon={Sliders} title="Multi-Band EQ" description="5-band equalizer with custom presets." />
                                    <FeatureItem icon={Volume2} title="Bass Boost" description="Adjustable bass enhancement (0-1000 strength)." />
                                    <FeatureItem icon={Waves} title="Virtualizer" description="Surround sound simulation (0-1000 strength)." />
                                </div>
                            </DocSubsection>
                        </DocSection>

                        {/* Lyrics */}
                        <DocSection id="lyrics" icon={Music2} title="Lyrics">
                            <DocSubsection title="Synced Lyrics" id="lyrics-synced-lyrics">
                                <p className={styles.paragraph}>Real-time time-synced lyrics from multiple providers:</p>
                                <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
                                    <span className={styles.tag}>SimpMusic</span>
                                    <span className={styles.tag}>LRCLIB</span>
                                    <span className={styles.tag}>YouTube</span>
                                    <span className={styles.tag}>Spotify</span>
                                </div>
                                <FeatureItem icon={Sparkles} title="AI Translation" description="Translate lyrics on-the-fly using Gemini or OpenAI APIs." />
                            </DocSubsection>
                            <DocSubsection title="Spotify Canvas" id="lyrics-spotify-canvas">
                                <AlertBox type="green" icon={FileAudio} title="Animated Backgrounds">
                                    <p style={{ color: '#ccc' }}>Display Spotify Canvas looping videos for supported tracks. Requires Spotify account integration.</p>
                                </AlertBox>
                            </DocSubsection>
                        </DocSection>

                        {/* Library */}
                        <DocSection id="library" icon={Database} title="Library & Playlists">
                            <DocSubsection title="Library Management" id="library-&-playlists-library-management">
                                <div className={styles.grid2}>
                                    <FeatureCard icon={HardDrive} title="Local Playlists" description="Create and manage offline playlists completely on-device." />
                                    <FeatureCard icon={Cloud} title="YouTube Sync" description="Access and edit your YouTube Music online playlists." />
                                    <FeatureCard icon={Clock} title="History" description="Recently played tracks and listening history." />
                                    <FeatureCard icon={Heart} title="Liked Songs" description="Synced favorites collection from YouTube Music." />
                                </div>
                            </DocSubsection>
                            <DocSubsection title="Offline Caching" id="library-&-playlists-offline-caching">
                                <p className={styles.paragraph}>Download songs for offline playback with smart cache management.</p>
                            </DocSubsection>
                        </DocSection>

                        {/* Discovery */}
                        <DocSection id="discovery" icon={Globe} title="Home & Discovery">
                            <DocSubsection title="Personalized Feed" id="home-&-discovery-personalized-feed">
                                <FeatureItem icon={Sparkles} title="Quick Picks" description="Algorithmically generated recommendations based on your listening habits." />
                                <FeatureItem icon={Radio} title="Mood Mixes" description="Curated stations for Focus, Workout, Sleep, Party, and more." />
                            </DocSubsection>
                            <DocSubsection title="Charts & Trends" id="home-&-discovery-charts-&-trends">
                                <p className={styles.paragraph}>Explore Top 100 global charts and viral hits from over available 60+ countries.</p>
                            </DocSubsection>
                        </DocSection>

                        {/* Interface */}
                        <DocSection id="interface" icon={Layout} title="Interface">
                            <DocSubsection title="Liquid Glass UI" id="interface-liquid-glass-ui">
                                <div className={styles.grid2}>
                                    <FeatureCard icon={Sparkles} title="Blur Effects" description="Real-time blur on player backgrounds and navigation bars." />
                                    <FeatureCard icon={Palette} title="Mesh Gradients" description="Dynamic background gradients generated from album artwork." />
                                </div>
                            </DocSubsection>
                            <DocSubsection title="Theming" id="interface-theming">
                                <FeatureItem icon={Moon} title="OLED Dark Mode" description="True pitch-black theme (#000000) for AMOLED battery savings." />
                                <FeatureItem icon={Smartphone} title="Mini Player" description="Swipe gestures for quick control (Next/Prev/Dismiss)." />
                            </DocSubsection>
                        </DocSection>

                        {/* Settings */}
                        <DocSection id="settings" icon={Settings} title="Settings & Accounts">
                            <DocSubsection title="Integrations" id="settings-&-accounts-integrations">
                                <div className={styles.grid2}>
                                    <div className={`${styles.featureCard} ${styles.alertGreenCheck}`}>
                                        <h4 style={{ fontWeight: 700, color: '#4ade80', marginBottom: '8px' }}>YouTube Music</h4>
                                        <p className={styles.cardDesc}>Full account login via cookies. Syncs library and recommendations.</p>
                                    </div>
                                    <div className={styles.featureCard}>
                                        <h4 style={{ fontWeight: 700, color: '#22c55e', marginBottom: '8px' }}>Spotify</h4>
                                        <p className={styles.cardDesc}>Login for Lyrics, Canvas, and metadata access.</p>
                                    </div>
                                </div>
                            </DocSubsection>
                            <DocSubsection title="Privacy & Data" id="settings-&-accounts-privacy-&-data">
                                <FeatureItem icon={Shield} title="SponsorBlock" description="Automatically skip non-music segments like intros, outros, and promotions." />
                                <FeatureItem icon={Lock} title="Proxy Support" description="Configure HTTP/SOCKS5 proxies for region bypassing." />
                                <FeatureItem icon={HardDrive} title="Backup" description="Export downloads and settings to preserve data across updates." />
                            </DocSubsection>
                        </DocSection>

                        {/* Localization */}
                        <DocSection id="localization" icon={Languages} title="Localization">
                            <DocSubsection title="Global Support" id="localization-global-support">
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {["English", "日本語", "한국어", "中文", "Español", "Français", "Deutsch", "Italino", "Русский", "Polski", "Português", "Türkçe", "Tiếng Việt", "Indonesian", "Ukrainian", "Arabic", "Hindi"].map(l => (
                                        <span key={l} className={styles.tag}>{l}</span>
                                    ))}
                                    <span style={{ color: '#666', fontSize: '12px', padding: '4px 8px' }}>+ many more</span>
                                </div>
                            </DocSubsection>
                        </DocSection>

                        {/* Troubleshooting */}
                        <DocSection id="troubleshooting" icon={Terminal} title="Troubleshooting">
                            <DocSubsection title="Common Issues" id="troubleshooting-common-issues">
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    <AccordionItem title="How do I get started?" content="Voxtrona is currently in development. Check the Download page for updates on when native apps will be available. In the meantime, explore our web interface and join our community." />
                                    <AccordionItem title="Which platforms are supported?" content="We're working on native apps for Android, Windows, and macOS. Stay tuned to our community channels for release updates." />
                                    <AccordionItem title="Is Voxtrona open source?" content="Parts of Voxtrona use open-source technologies. We're committed to transparency and may open-source more components in the future." />
                                    <AccordionItem title="How can I contribute or provide feedback?" content="Join our community channels, report bugs through the bug report page, or contact us directly through the support page. We welcome all feedback!" />
                                </div>
                            </DocSubsection>

                            <DocSubsection title="Performance Tips" id="troubleshooting-performance-tips">
                                <div className={styles.grid2}>
                                    <div className={styles.featureCard}>
                                        <Zap size={20} color="#facc15" style={{ marginBottom: '8px' }} />
                                        <h4 className={styles.cardTitle}>Web Performance</h4>
                                        <ul style={{ fontSize: '12px', color: '#9ca3af', listStyle: 'none' }}>
                                            <li>• Use a modern browser (Chrome, Firefox, Edge)</li>
                                            <li>• Ensure stable internet connection</li>
                                            <li>• Clear browser cache if experiencing issues</li>
                                        </ul>
                                    </div>
                                    <div className={styles.featureCard}>
                                        <Gauge size={20} color="#60a5fa" style={{ marginBottom: '8px' }} />
                                        <h4 className={styles.cardTitle}>Best Experience</h4>
                                        <ul style={{ fontSize: '12px', color: '#9ca3af', listStyle: 'none' }}>
                                            <li>• Use quality headphones or speakers</li>
                                            <li>• Enable hardware acceleration in browser</li>
                                            <li>• Keep browser up to date</li>
                                        </ul>
                                    </div>
                                </div>
                            </DocSubsection>

                            <DocSubsection title="Support" id="troubleshooting-support">
                                <p className={styles.paragraph}>Need more help? We&apos;re here for you.</p>
                            </DocSubsection>
                        </DocSection>

                        <div className={styles.footerCTA}>
                            <div>
                                <div style={{ color: '#9ca3af', marginBottom: '4px' }}>Ready to experience the future?</div>
                                <div style={{ fontSize: '24px', fontWeight: 'bold' }}>Download Voxtrona Today</div>
                            </div>
                            <a href="https://play.google.com/store/apps/details?id=com.voxtrona.music" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                                Download Now <ArrowRight size={20} />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}

// Helpers
function DocSection({ id, icon: Icon, title, children }: any) {
    return (
        <section id={id} className={styles.docSection}>
            <div className={styles.sectionHeader}>
                <div className={styles.sectionIconBox}><Icon size={24} /></div>
                <h2 className={styles.sectionTitle}>{title}</h2>
            </div>
            {children}
        </section>
    );
}

function DocSubsection({ title, id, children }: any) {
    const sectionId = id || title.toLowerCase().replace(/\s+/g, "-");
    return (
        <div id={sectionId} className={styles.subsection}>
            <h3 className={styles.subsectionTitle}>{title}</h3>
            {children}
        </div>
    );
}

function FeatureCard({ icon: Icon, title, description }: any) {
    return (
        <div className={styles.featureCard}>
            <Icon className={styles.cardIcon} size={24} />
            <div className={styles.cardTitle}>{title}</div>
            <div className={styles.cardDesc}>{description}</div>
        </div>
    );
}

function FeatureItem({ icon: Icon, title, description }: any) {
    return (
        <div className={styles.featureItem}>
            <div className={styles.itemIconBox}><Icon size={20} /></div>
            <div>
                <div style={{ fontWeight: 700, marginBottom: '4px' }}>{title}</div>
                <div style={{ fontSize: '13px', color: '#9ca3af' }}>{description}</div>
            </div>
        </div>
    );
}

function PlatformCard({ icon: Icon, title, status, statusColor }: any) {
    const statusClass = statusColor === 'green' ? styles.statusGreen : styles.statusYellow;
    return (
        <div className={styles.platformCard}>
            <Icon size={32} color="#ffffff" style={{ marginBottom: '12px' }} />
            <div className={styles.cardTitle}>{title}</div>
            <span className={`${styles.statusBadge} ${statusClass}`}>{status}</span>
        </div>
    );
}

function AlertBox({ type, icon: Icon, title, children }: any) {
    const className = type === 'green' ? styles.alertGreen : styles.alertBlue;
    const color = type === 'green' ? '#22c55e' : '#3b82f6';
    return (
        <div className={`${styles.alertBox} ${className}`}>
            <div className={styles.alertHeader}>
                <Icon size={20} color={color} />
                {title}
            </div>
            {children}
        </div>
    )
}

function QualityCard({ label, detail, color }: any) {
    const colorMap: any = { red: '#ef4444', orange: '#f97316', green: '#22c55e', purple: '#a855f7' };
    return (
        <div className={styles.qualityCard} style={{ borderColor: `${colorMap[color]}30`, background: `${colorMap[color]}10` }}>
            <div className={styles.qualityValue}>{detail}</div>
            <div className={styles.qualityLabel} style={{ color: colorMap[color] }}>{label}</div>
        </div>
    )
}

function AccordionItem({ title, content }: any) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={styles.accordionItem}>
            <button onClick={() => setIsOpen(!isOpen)} className={styles.accordionTrigger}>
                <span>{title}</span>
                <ChevronRight size={20} style={{ transform: isOpen ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} style={{ overflow: "hidden" }}>
                        <div className={styles.accordionContent}>{content}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
