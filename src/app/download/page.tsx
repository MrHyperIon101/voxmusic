import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import DownloadHero from '@/components/DownloadHero/DownloadHero';
import DownloadGrid from '@/components/DownloadGrid/DownloadGrid';

export default function DownloadPage() {
    return (
        <main style={{ minHeight: '100vh', background: '#000' }}>
            <Navbar />
            <DownloadHero />
            <DownloadGrid />
            <Footer />
        </main>
    );
}
