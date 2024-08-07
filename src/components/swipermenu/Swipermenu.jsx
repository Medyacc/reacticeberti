import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import './swipermenu.css'
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef, useState } from 'react';
import coffeeImg from '/images/products/coffee.png';
import milkshakeImg from '/images/products/milkshak.png';
import juiceImg from '/images/products/juice.png';
import cocktailImg from '/images/products/cocktail.png';
import icecreamImg from '/images/products/icecream.png';
import hotdrinksImg from '/images/products/hotdrinks.png';
import colddrinksImg from '/images/products/colddrinks.png';
import { useTranslation } from 'react-i18next';

export default function Swipermenu() {

    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);
    const { t } = useTranslation();

    const data = [
        {
            name: t("swipermenu.coffee"),
            img: coffeeImg
        },

        {
            name: t("swipermenu.hotDrinks"),
            img: hotdrinksImg
        },
        {
            name: t("swipermenu.juices"),
            img: juiceImg
        },
        {
            name: t("swipermenu.milkshake"),
            img: milkshakeImg
        },
        {
            name: t("swipermenu.iceCream"),
            img: icecreamImg
        },
        {
            name: t("swipermenu.cocktails"),
            img: cocktailImg
        },
        {
            name: t("swipermenu.colDrinks"),
            img: colddrinksImg
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
