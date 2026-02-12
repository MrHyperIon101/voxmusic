export default function JsonLd() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'SoftwareApplication',
                'name': 'Voxtrona Music',
                'operatingSystem': 'Android, Windows',
                'applicationCategory': 'MultimediaApplication',
                'ratingValue': '4.8',
                'ratingCount': '240000',
                'offers': {
                    '@type': 'Offer',
                    'price': '0',
                    'priceCurrency': 'USD',
                },
                'featureList': 'Spatial Audio, Meridian Audio Processing, Lossless Playback, Lyrics Translation',
                'screenshot': 'https://voxtrona.souvikbagchi.social/hero-dancer.png',
                'author': {
                    '@type': 'Organization',
                    'name': 'Voxtrona Team',
                    'url': 'https://voxtrona.souvikbagchi.social',
                },
            },
            {
                '@type': 'Organization',
                'name': 'Voxtrona Music',
                'url': 'https://voxtrona.souvikbagchi.social',
                'logo': 'https://voxtrona.souvikbagchi.social/favicon.png',
                'sameAs': [
                    'https://github.com/MrHyperIon101/voxmusic',
                    'https://instagram.com/mrhyperion',
                    'https://x.com/mrhyperionai'
                ],
            },
            {
                '@type': 'BreadcrumbList',
                'itemListElement': [
                    {
                        '@type': 'ListItem',
                        'position': 1,
                        'name': 'Home',
                        'item': 'https://voxtrona.souvikbagchi.social'
                    },
                    {
                        '@type': 'ListItem',
                        'position': 2,
                        'name': 'Download',
                        'item': 'https://voxtrona.souvikbagchi.social/download'
                    },
                    {
                        '@type': 'ListItem',
                        'position': 3,
                        'name': 'Docs',
                        'item': 'https://voxtrona.souvikbagchi.social/docs'
                    }
                ]
            }
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
