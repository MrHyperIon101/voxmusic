export default function HowToJsonLd() {
    const howToData = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'How to Install Voxtrona Music on Android',
        'description': 'Step-by-step guide to installing the Voxtrona Music APK on your Android device.',
        'step': [
            {
                '@type': 'HowToStep',
                'name': 'Download the APK',
                'text': 'Visit the Voxtrona Download page and tap the "Download APK" button for the latest version.',
                'url': 'https://voxtrona.souvikbagchi.social/download'
            },
            {
                '@type': 'HowToStep',
                'name': 'Allow Installation',
                'text': 'If prompted, allow your browser to install unknown apps in your Android settings.',
                'image': 'https://voxtrona.souvikbagchi.social/hero-dancer.png'
            },
            {
                '@type': 'HowToStep',
                'name': 'Install the App',
                'text': 'Tap "Install" on the prompt and wait for the process to complete.'
            },
            {
                '@type': 'HowToStep',
                'name': 'Grant Permissions',
                'text': 'Open Voxtrona and grant the necessary permissions for Notifications and Audio access.'
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(howToData) }}
        />
    );
}
