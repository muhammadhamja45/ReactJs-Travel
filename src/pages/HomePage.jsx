import videoBackground from '../assets/bg/bg.mp4';

const HomePage = () => {
    return (
        <div className="homepage">
            <header className="header">
                <div className="header-video">
                    <video autoPlay muted loop>
                        <source src={videoBackground} type="video/mp4" />
                    </video>
                    <div className="overlay"></div>
                    <div className="welcome-section">
                        <h1>Selamat Datang di Website Travel</h1>
                        <p>Temukan destinasi impian Anda dan nikmati pengalaman perjalanan yang tak terlupakan.</p>
                        <button className="explore-button">Jelajahi Lebih Lanjut</button>
                    </div>
                    <div className="homepage">
                        {/* Komponen lain dalam halaman */}
                    </div>
                </div>
                {/* Konten lainnya dalam header */}
            </header>

        </div>


    );
};

export default HomePage;
