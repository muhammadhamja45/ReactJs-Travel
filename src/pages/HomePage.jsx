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
                        <h1 >Indonesia Travel</h1>
                        <h2>Best Destination</h2>
                        <div className="button-wrapper">
                            <div className="text-divider ">
                                <span className="left-text ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, asperiores. Rerum beatae harum eaque esse.</span>
                                <span className="right-text ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nam inventore commodi itaque a molestias?</span>
                            </div>
                        </div>
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
