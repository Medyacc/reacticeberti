import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import './swipermenu.css'
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef, useState } from 'react';
import coffeeImg from '/images/products/coffee.webp';
import milkshakeImg from '/images/products/milkshak.webp';
import juiceImg from '/images/products/juice.webp';
import cocktailImg from '/images/products/cocktail.webp';
import icecreamImg from '/images/products/icecream.webp';
import hotdrinksImg from '/images/products/hotdrinks.webp';
import colddrinksImg from '/images/products/colddrinks.webp';
import { useTranslation } from 'react-i18next';
import Productsmenu from '../menu/productsmenu/Productsmenu'

export default function Swipermenu() {

    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState('coffee');
    const swiperRef = useRef(null);
    const { t } = useTranslation();

    const data = [
        { name: t("swipermenu.coffee"), img: coffeeImg, category: "coffee" },
        { name: t("swipermenu.hotDrinks"), img: hotdrinksImg, category: "hotdrinks" },
        { name: t("swipermenu.juices"), img: juiceImg, category: "juice" },
        { name: t("swipermenu.milkshake"), img: milkshakeImg, category: "milkshake" },
        { name: t("swipermenu.iceCream"), img: icecreamImg, category: "icecream" },
        { name: t("swipermenu.cocktails"), img: cocktailImg, category: "cocktail" },
        { name: t("swipermenu.colDrinks"), img: colddrinksImg, category: "colddrinks" },
    ];

    const menuProducts = t('menu.products', { returnObjects: true });

    const handleSlideChange = (swiper) => {
        const realIndex = swiper.realIndex;
        setActiveIndex(realIndex);
        setSelectedCategory(data[realIndex].category);
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
        <div id="menu" className='menu'>
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
            <Productsmenu
                menuProducts={menuProducts}
                selectedCategory={selectedCategory}
            />
        </div>
    )
}
