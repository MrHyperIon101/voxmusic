import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import DownloadHero from '@/components/DownloadHero/DownloadHero';
import UniversalDownloadCard from '@/components/UniversalDownloadCard/UniversalDownloadCard';

export default function DownloadPage() {
    return (
        <main style={{ minHeight: '100vh', background: '#000' }}>
            <Navbar />
            <DownloadHero />
            <UniversalDownloadCard />
            <Footer />
        </main>
    );
}
