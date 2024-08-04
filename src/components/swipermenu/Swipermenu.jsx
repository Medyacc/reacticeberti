import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import './swipermenu.css'
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef, useState } from 'react';
import coffeeImg from '/images/products/coffee.png';
import pizzaImg from '/images/products/pizza.png';
import juiceImg from '/images/products/juice.png';
import tacosImg from '/images/products/tacos.png';
import cakeImg from '/images/products/cake.png';
import burgerImg from '/images/products/burger.png';
import pastryImg from '/images/products/pastry.png';

export default function Swipermenu() {

    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);

    const data = [
        {
            name: "Coffee",
            img: coffeeImg
        },
        {
            name: "Milkshake",
            img: pizzaImg
        },
        {
            name: "IceCream",
            img: juiceImg
        },
        {
            name: "Tacos",
            img: tacosImg
        },
        {
            name: "Burger",
            img: burgerImg
        },
        {
            name: "Cake",
            img: cakeImg
        },
        {
            name: "Pastry",
            img: pastryImg
        },

    ];


    const handleSlideChange = (swiper) => {
        const realIndex = swiper.realIndex;
        setActiveIndex(realIndex);
    };

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    return (
        <div className='swiperMenu'>
            <Swiper
                style={{ width: "100%" }}
                modules={[Navigation]}
                slidesPerView={3}
                slidesPerGroup={1}
                spaceBetween={200}
                centeredSlides={true}
                loop={true}
                onSlideChange={handleSlideChange}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    500: { slidesPerView: 3 },
                }}
            >
                {
                    data.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className={`itemMenu ${i === activeIndex ? 'active' : ''}`}>
                                {i === activeIndex && <img src={item.img} alt="" />}
                                <p data-text={item.name}>{item.name}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className="swiper-button-prev" onClick={handlePrev}></div>
            <div className="swiper-button-next" onClick={handleNext}></div>
        </div>
    )
}
