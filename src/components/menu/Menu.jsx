import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import './menu.css'
import 'swiper/css';
import 'swiper/css/navigation';
import coffeeImg from '/images/products/menucoffee.jpg';
import milkshakeImg from '/images/products/menumilkshake.jpg';
import juiceImg from '/images/products/menujuices.jpg';
import cocktailImg from '/images/products/menucocktails.jpg';
import icecreamImg from '/images/products/menuicecream.jpg';
import hotdrinksImg from '/images/products/menuhotdrinks.jpg';
import colddrinksImg from '/images/products/menucoldrinks.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import Productsmenu from './productsmenu/Productsmenu';

export default function Menu() {
    const dataMenu = [
        { img: coffeeImg, type: 'coffee' },
        { img: milkshakeImg, type: 'milkshake' },
        { img: juiceImg, type: 'juice' },
        { img: cocktailImg, type: 'cocktail' },
        { img: icecreamImg, type: 'icecream' },
        { img: hotdrinksImg, type: 'hotdrinks' },
        { img: colddrinksImg, type: 'colddrinks' }
    ];

    const [selectedImage, setSelectedImage] = useState(null);
    const [menuProducts, setMenuProducts] = useState([]);
    const [displayedProducts, setDisplayedProducts] = useState([]);

    const { t } = useTranslation();

    useEffect(() => {
        const products = t("menu.products", { returnObjects: true });
        console.log("Fetched products: ", products);
        setMenuProducts(products);
        const categories = [...new Set(products.map(product => product.name))];
        const initialDisplay = categories.map(category =>
            products.find(product => product.name === category)
        );
        setDisplayedProducts(initialDisplay);
        console.log("Initial display products: ", initialDisplay);
    }, [t]);

    const handleImageClick = (index) => {
        console.log("Image clicked at index: ", index);
        setSelectedImage(index === selectedImage ? null : index);
        if (index === selectedImage) {
            const categories = [...new Set(menuProducts.map(product => product.name))];
            const initialDisplay = categories.map(category =>
                menuProducts.find(product => product.name === category)
            );
            setDisplayedProducts(initialDisplay);
            console.log("Display reset to initial products: ", initialDisplay);
        } else {
            filterProducts(dataMenu[index].type);
        }
    };

    const filterProducts = (type) => {
        console.log("Filtering products for type: ", type);
        const filtered = menuProducts.filter((product) => product.name === type);
        setDisplayedProducts(filtered);
        console.log(`Filtered products for type ${type}:`, filtered);
    };

    return (
        <div id="menu" className='menu'>
            <h1 className='menutitle'>{t("menu.title")}</h1>
            <div className='container'>
                <Swiper
                    slidesPerView={1}
                    slidesPerGroup={1}
                    spaceBetween={50}
                    breakpoints={{
                        320: {
                            slidesPerView: 3,
                        },
                        480: {
                            slidesPerView: 4,
                        },
                        640: {
                            slidesPerView: 5,
                        },
                        1024: {
                            slidesPerView: 6,
                        }
                    }}
                >
                    {
                        dataMenu.map((item, i) => (
                            <SwiperSlide key={i}>
                                <img src={item.img} alt="" className={selectedImage === i ? 'selected' : ''} onClick={() => handleImageClick(i)} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <Productsmenu menuProducts={displayedProducts} />
            </div>
        </div>
    );
}