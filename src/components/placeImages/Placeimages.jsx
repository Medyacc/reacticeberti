import './placeimages.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import img1 from '/images/place/img1.webp'
import img2 from '/images/place/img2.webp'
import img3 from '/images/place/img3.webp'
import img4 from '/images/place/img4.webp'
import img5 from '/images/place/img5.webp'
import img6 from '/images/place/img6.webp'
import img7 from '/images/place/img7.webp'
import img8 from '/images/place/img8.webp'
import img9 from '/images/place/img9.webp'
import img10 from '/images/place/img10.webp'
import img11 from '/images/place/img11.webp'
import img12 from '/images/place/img12.webp'
import img13 from '/images/place/img13.webp'
import img14 from '/images/place/img14.webp'

const imagesSlider = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14]

export default function Placeimages() {
    return (
        <div className='place-images'>
            <div className='container'>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    loop={true}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    className='place_container'
                >
                    {imagesSlider.map((elm, index) => (
                        <SwiperSlide key={index}>
                            <img src={elm} alt={`image_slider_${index + 1}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}