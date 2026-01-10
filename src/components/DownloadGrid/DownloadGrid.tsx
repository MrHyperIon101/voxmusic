'use client';
import { useState } from 'react';
import {
    Smartphone, Monitor, Tv, ArrowRight, Zap, Music,
    Headphones, Shield, Mic2, Layers, Cpu, Maximize
} from 'lucide-react';
import styles from './DownloadGrid.module.css';
import BetaModal from '../BetaModal/BetaModal';

export default function DownloadGrid() {
    const [isBetaOpen, setIsBetaOpen] = useState(false);
    const [selectedPlatform, setSelectedPlatform] = useState('');

    const openBeta = (platform: string) => {
        setSelectedPlatform(platform);
        setIsBetaOpen(true);
    };

    return (
        <section className={styles.section}>
            <div className={styles.grid}>

                {/* Android Card */}
                <div className={`${styles.card} ${styles.androidGlow}`}>
                    <div className={styles.header}>
                        <div className={styles.iconRow}>
                            <Smartphone size={32} className={styles.platformIcon} color="#a4c639" />
                            <Smartphone size={64} className={styles.deviceIcon} />
                        </div>
                        <h3 className={styles.title}>Android</h3>
                        <p className={styles.subtitle}>The complete mobile high fidelity experience.</p>
                    </div>

                    <div className={styles.featureGrid}>
                        <div className={styles.featureBox}>
                            <div className={styles.featIcon}><Zap size={18} color="#a4c639" /></div>
                            <div className={styles.featTitle}>Spatial Audio</div>
                            <div className={styles.featDesc}>Meridian</div>
                        </div>
                        <div className={styles.featureBox}>
                            <div className={styles.featIcon}><Music size={18} color="#a4c639" /></div>
                            <div className={styles.featTitle}>Lossless</div>
                            <div className={styles.featDesc}>FLAC & WAV</div>
                        </div>
                        <div className={styles.featureBox}>
                            <div className={styles.featIcon}><Maximize size={18} color="#a4c639" /></div>
                            <div className={styles.featTitle}>Visuals</div>
                            <div className={styles.featDesc}>Lyrics + Canvas</div>
                        </div>
                        <div className={styles.featureBox}>
                            <div className={styles.featIcon}><Layers size={18} color="#a4c639" /></div>
                            <div className={styles.featTitle}>Playback</div>
                            <div className={styles.featDesc}>Bit-Perfect</div>
                        </div>
                    </div>

                    <div className={styles.actions}>
                        {/* Download Official (Placeholder link) */}
                        <a href="https://github.com/MrHyperIon101/voxmusic/releases/download/3M-Special/Codename-Orion.Release.apk" className={styles.primaryAction}>
                            <div className={styles.btnText}>
                                <span className={styles.btnTitle}>Download Official</span>
                                <span className={styles.btnSub}>Codename Orion (v2.3.2026)</span>
                            </div>
                            <ArrowRight size={16} className={styles.arrow} />
                        </a>

                        {/* Join Beta */}
                        <button onClick={() => openBeta('Android')} className={styles.betaAction}>
                            <div className={styles.btnText}>
                                <span className={styles.btnTitle}>Join Beta</span>
                                <span className={styles.betaSub}>Daily Build</span>
                            </div>
                            <ArrowRight size={16} className={styles.arrow} />
                        </button>
                    </div>
                </div>

                {/* Windows Card */}
                <div className={`${styles.card} ${styles.windowsGlow}`}>
                    <div className={styles.header}>
                        <div className={styles.iconRow}>
                            <Monitor size={32} className={styles.platformIcon} color="#0078d7" />
                            <Monitor size={64} className={styles.deviceIcon} />
                        </div>
                        <h3 className={styles.title}>Windows</h3>
                        <p className={styles.subtitle}>Desktop power unleashed with ASIO support.</p>
                    </div>

                    <div className={styles.featureGrid}>
                        <div className={styles.featureBox}>
                            <div className={styles.featIcon}><Cpu size={18} color="#0078d7" /></div>
                            <div className={styles.featTitle}>Audio Engine</div>
                            <div className={styles.featDesc}>Advanced EQ</div>
                        </div>
                        <div className={styles.featureBox}>
                            <div className={styles.featIcon}><Shield size={18} color="#0078d7" /></div>
                            <div className={styles.featTitle}>Drivers</div>
                            <div className={styles.featDesc}>ASIO Support</div>
                        </div>
                        <div className={styles.featureBox}>
                            <div className={styles.featIcon}><Monitor size={18} color="#0078d7" /></div>
                            <div className={styles.featTitle}>Native</div>
                            <div className={styles.featDesc}>Win 10/11</div>
                        </div>
                        <div className={styles.featureBox}>
                            <div className={styles.featIcon}><Music size={18} color="#0078d7" /></div>
                            <div className={styles.featTitle}>Bitrate</div>
                            <div className={styles.featDesc}>Hi-Res Ready</div>
                        </div>
                    </div>

                    <div className={styles.actions}>
                        <button className={`${styles.primaryAction} ${styles.disabled}`}>
                            <div className={styles.btnText}>
                                <span className={styles.btnTitle}>Official Release</span>
                                <span className={styles.btnSub} style={{ color: '#666' }}>Coming Soon</span>
                            </div>
                            <ArrowRight size={16} className={styles.arrow} />
                        </button>

                        <button onClick={() => openBeta('Windows')} className={styles.betaAction}>
                            <div className={styles.btnText}>
                                <span className={styles.btnTitle}>Join Beta</span>
                                <span className={styles.betaSub}>Early Access</span>
                            </div>
                            <ArrowRight size={16} className={styles.arrow} />
                        </button>
                    </div>
                </div>

                {/* Smart TV Card */}
                <div className={`${styles.card} ${styles.tvGlow}`}>
                    <div className={styles.header}>
                        <div className={styles.iconRow}>
                            <Tv size={32} className={styles.platformIcon} color="#e50914" />
                            <Tv size={64} className={styles.deviceIcon} />
                        </div>
                        <h3 className={styles.title}>Smart TV</h3>
                        <p className={styles.subtitle}>Cinematic audio for the big screen.</p>
                    </div>

                    <div className={styles.featureGrid}>
                        <div className={styles.featureBox}>
                            <div className={styles.featIcon}><Maximize size={18} color="#e50914" /></div>
                            <div className={styles.featTitle}>Interface</div>
                            <div className={styles.featDesc}>TV Native</div>
                        </div>
                        <div className={styles.featureBox}>
                            <div className={styles.featIcon}><Zap size={18} color="#e50914" /></div>
                            <div className={styles.featTitle}>Passthrough</div>
                            <div className={styles.featDesc}>Dolby Atmos</div>
                        </div>
                        <div className={styles.featureBox}>
                            <div className={styles.featIcon}><Shield size={18} color="#e50914" /></div>
                            <div className={styles.featTitle}>Control</div>
                            <div className={styles.featDesc}>Remote API</div>
                        </div>
                        <div className={styles.featureBox}>
                            <div className={styles.featIcon}><Layers size={18} color="#e50914" /></div>
                            <div className={styles.featTitle}>Engine</div>
                            <div className={styles.featDesc}>Lossless</div>
                        </div>
                    </div>

                    <div className={styles.actions}>
                        <button className={`${styles.primaryAction} ${styles.disabled}`}>
                            <div className={styles.btnText}>
                                <span className={styles.btnTitle}>Official Release</span>
                                <span className={styles.btnSub} style={{ color: '#666' }}>TBA</span>
                            </div>
                            <ArrowRight size={16} className={styles.arrow} />
                        </button>

                        <button onClick={() => openBeta('SmartTV')} className={styles.betaAction}>
                            <div className={styles.btnText}>
                                <span className={styles.btnTitle}>Join Waitlist</span>
                                <span className={styles.betaSub} style={{ color: '#e50914' }}>Notify Me</span>
                            </div>
                            <ArrowRight size={16} className={styles.arrow} />
                        </button>
                    </div>
                </div>

            </div>

            <BetaModal
                isOpen={isBetaOpen}
                onClose={() => setIsBetaOpen(false)}
                platform={selectedPlatform}
            />
        </section>
    );
}
