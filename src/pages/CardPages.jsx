import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from 'react-bootstrap';
import { destinations } from '../data/index';
import 'swiper/swiper-bundle.min.css';

const CardPages = () => {
    return (
        <Container>
            <h2 className="text-center my-4">Best Destinasi</h2>
            <Swiper
                navigation
                slidesPerView={6}
                spaceBetween={20}
                breakpoints={{
                    768: {
                        slidesPerView: 3,
                    },
                    576: {
                        slidesPerView: 2,
                    },
                    400: {
                        slidesPerView: 1,
                    },
                }}
            >
                {destinations.map((destination) => (
                    <SwiperSlide key={destination.id}>
                        <div className="swiper-card">
                            <img
                                className="swiper-card-image"
                                src={destination.image}
                                alt={destination.title}
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
    );
};

export default CardPages;
