export default function FaqJsonLd() {
    const faqData = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
            {
                '@type': 'Question',
                'name': 'What is Voxtrona Music?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Voxtrona Music is a premium audiophile music player for Android and Windows. It features a custom high-fidelity audio engine, Meridian Audio spatial processing, and a unique Liquid Glass user interface.'
                }
            },
            {
                '@type': 'Question',
                'name': 'How do I install Voxtrona on Android?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Download the latest APK from our official website or GitHub releases. Enable "Install from Unknown Sources" in your device settings, and open the APK file to install.'
                }
            },
            {
                '@type': 'Question',
                'name': 'Is Voxtrona Music free?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Yes, Voxtrona Music is currently free to use during the beta period. Some premium features may require a subscription in future releases, but the core player will remain accessible.'
                }
            },
            {
                '@type': 'Question',
                'name': 'Why are my lyrics wrong?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Lyrics are fetched from third-party sources like LRCLIB and Spotify. Occasional mismatches can occur due to metadata differences. You can report incorrect lyrics through the app.'
                }
            },
            {
                '@type': 'Question',
                'name': 'Does Voxtrona support offline playback?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Yes, Voxtrona supports offline playback. You can download songs to your device cache or import local files for a completely offline experience.'
                }
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />
    );
}
