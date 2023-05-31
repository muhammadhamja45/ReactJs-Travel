import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from 'react-bootstrap';
import { destinations } from '../data/index';
import 'swiper/swiper-bundle.min.css';

const CardPages = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    return (
        <div className='slide'>
            <Container>
                <h2 className="text-center my-4" data-aos="fade-up">Best Destinasi</h2>
                <Swiper
                    navigation
                    slidesPerView={4}
                    spaceBetween={30}
                    breakpoints={{
                        768: {
                            slidesPerView: 4,
                        },
                        576: {
                            slidesPerView: 2,
                        },
                        400: {
                            slidesPerView: 1,
                        },
                    }}
                >
                    {destinations.slice(0, 6).map((destination) => (
                        <SwiperSlide key={destination.id} data-aos="fade-up" data-aos-duration="1000">
                            <div className="swiper-card">
                                <img
                                    className="swiper-card-image"
                                    src={destination.image}
                                    alt={destination.title}
                                    style={{ width: '150%', height: '600px', objectFit: 'cover' }}
                                />
                                <div className="swiper-card-overlay">
                                    <h5 className="swiper-card-title">{destination.title}</h5>
                                    <p className="swiper-card-description">{destination.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </div>
    );
};

export default CardPages;
