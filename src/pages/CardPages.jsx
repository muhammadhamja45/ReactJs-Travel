import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from 'react-bootstrap';
import { destinations } from '../data/index';
import 'swiper/swiper-bundle.min.css';

const CardPages = () => {
    return (
        <div className='slide'>
            <Container>
                <h2 className="text-center my-4">Best Destinasi</h2>
                <Swiper
                    navigation
                    slidesPerView={4} // Menampilkan 4 gambar pada layar besar
                    spaceBetween={30} // Menambahkan jarak antara gambar
                    breakpoints={{
                        768: {
                            slidesPerView: 4, // Menampilkan 3 gambar pada layar medium
                        },
                        576: {
                            slidesPerView: 2, // Menampilkan 2 gambar pada layar kecil
                        },
                        400: {
                            slidesPerView: 1, // Menampilkan 1 gambar pada layar sangat kecil
                        },
                    }}
                >
                    {destinations.slice(0, 6).map((destination) => (
                        <SwiperSlide key={destination.id}>
                            <div className="swiper-card">
                                <img
                                    className="swiper-card-image"
                                    src={destination.image}
                                    alt={destination.title}
                                    style={{ width: '150%', height: '600px', objectFit: 'cover' }} // Mengatur lebar dan tinggi gambar
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
