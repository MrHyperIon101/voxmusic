# Voxtrona

<div align="center">
  <img src="https://raw.githubusercontent.com/MrHyperIon101/voxtrona/main/public/favicon.png" alt="Voxtrona Logo" width="120" />
  <h1 align="center">Deploy the Core</h1>
  <p align="center">
    <b>Next-Gen Audio Experience for Android & Windows</b>
  </p>
</div>

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Kotlin](https://img.shields.io/badge/Kotlin-2.0-7F52FF?style=for-the-badge&logo=kotlin)](https://kotlinlang.org/)
[![Android](https://img.shields.io/badge/Android-15-3DDC84?style=for-the-badge&logo=android)](https://developer.android.com/)

</div>

<br />

## 🚀 Introduction

**Voxtrona** is a premium audiophile music player and YouTube Music client for Android and Windows, featuring **Meridian Audio** spatial processing.

It features a highly immersive, sci-fi inspired interface designed to "wow" users from the first interaction. The **Liquid Glass** aesthetic combines with a custom high-fidelity audio engine to deliver a zero-compromise experience.

> [!NOTE] 
> **Current Version:** Codename Orion (v2.3.2026) | **Status:** 3M Special Release

## ✨ Features

### 🎧 Core Playback

- **Lossless Streaming**: High-fidelity audio streaming up to FLAC/WAV quality.
- **Voxtron Engine 2.0**: Custom audio processing pipeline for bit-perfect playback.
- **Background Play**: Seamless background playback with Picture-in-Picture (PiP) support.
- **Speed & Pitch**: Real-time control with granular precision.

### 🎛️ Audio FX (Meridian Audio)

- **Meridian Spatial Audio**: Native spatial audio support (Android 13+) with head tracking.
- **Dirac & Dolby**: Profiles for Dirac Live and Dolby Atmos integrated alongside Meridian.
- **Professional EQ**: Multi-band equalizer with bass boost, virtualizer, and reverb.
- **Liquid EQ**: Visual audio spectrum analyzer in the "Immersive UI".

### 🎤 Lyrics & Canvas

- **Synced Lyrics**: Real-time time-synced lyrics from multiple providers (LRCLIB, Musixmatch).
- **AI Translation**: On-the-fly lyric translation powered by Gemini/OpenAI.
- **Spotify Canvas**: 2K looping video backgrounds for supported tracks.
- **Fullscreen Mode**: Immersive blur mode for pure lyric enjoyment.

### 📚 Library Management

- **Unified Library**: Merge local tracks, YouTube playlists, and Spotify collections.
- **Offline Mode**: Smart caching and manual downloads for offline listening.
- **Backup & Sync**: Cross-device playlist and setting synchronization via Voxtrona Cloud.

### 🎨 Interface (Liquid Glass)

- **Liquid Glass UI**: Stunning blur effects, mesh gradients, and smooth animations.
- **OLED Mode**: True pitch-black theme for AMOLED displays.
- **StaggeredMenu**: Unique animated navigation system.
- **Mini Player**: Gesture-based swipe controls.

## 🛠️ Tech Stack

### Website (This Repo)

- **Framework**: [Next.js 16.1](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Vanilla CSS Modules](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Modules) (No Tailwind)
- **Animations**: [GSAP](https://gsap.com/) & [Framer Motion](https://www.framer.com/motion/)

### Android Application

- **Language**: **Kotlin** (100% Native)
- **Architecture**: MVVM / Clean Architecture
- **UI**: Jetpack Compose
- **Audio Engine**: Custom C++ / Kotlin implementation using Meridian SDK

## ❓ FAQ

**1. Wrong Lyrics?**
Lyrics are fetched from LRCLIB. Sometimes mismatches occur due to timing metadata variance.

**2. Why the name Voxtrona?**
It's a fusion of _Vox_ (voice) and _Electronica_. Voxtrona isn't just music — it's an experience.

For more FAQs, check our [Documentation](https://voxtrona.souvikbagchi.social/docs).

## ⚡ Getting Started (Website)

1.  Clone the repository:

    ```bash
    git clone https://github.com/MrHyperIon101/voxtrona.git
    cd voxmusic
    ```

2.  Install dependencies:

    ```bash
    npm install
    # or
    bun install
    ```

3.  Run the development server:

    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000)

## 👨‍💻 Credits

- **[MrHyperIon101](https://github.com/MrHyperIon101)** — Founder, Lead Developer
- **Meridian Audio** — Spatial Audio Partner
- **[Souvik Bagchi](https://github.com/sb-im)** — Design Inspiration

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">
  <p>Built with ❤️ by the Voxtrona Team</p>
</div>
