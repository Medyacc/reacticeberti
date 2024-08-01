import { useEffect, useState } from 'react'
import './menu.css'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useTranslation } from 'react-i18next'

export default function Menu() {

    const [parent] = useAutoAnimate()
    const { t } = useTranslation();


    const [menuProducts, setMenuProducts] = useState([])
    const [selectedFilter, setSelectedFilter] = useState('All')

    useEffect(() => {
        const products = t("menu.products", { returnObjects: true });
        setMenuProducts(products)
    }, [t])


    const filter = (type) => {
        const products = t("menu.products", { returnObjects: true });
        if (type === 'All') {
            setMenuProducts(products)
        } else {
            setMenuProducts(products.filter((product) => product.name === type))
        }
        setSelectedFilter(type)
    }
    return (
        <div id="menu" className='menu'>
            <h1 className='main-title'>{t("menu.title")}</h1>
            <div className='container'>
                <div className='boxMenu'>
                    <ul className="listMenu">
                        <li className={selectedFilter === 'All' ? 'activeli' : ''} onClick={() => filter("All")}>{t("menu.list.all")}</li>
                        <li className={selectedFilter === 'coffee' ? 'activeli' : ''} onClick={() => filter("coffee")}>{t("menu.list.coffee")}</li>
                        <li className={selectedFilter === 'pizza' ? 'activeli' : ''} onClick={() => filter("pizza")}>{t("menu.list.pizza")}</li>
                        <li className={selectedFilter === 'juice' ? 'activeli' : ''} onClick={() => filter("juice")}>{t("menu.list.juices")}</li>
                    </ul>

                    <div className="productMenu" ref={parent}>
                        {
                            Array.isArray(menuProducts) && menuProducts.map((product, i) => (
                                <div key={i} className="cardProduct">
                                    <div className='imgProduct'>
                                        <img src={product.img} alt="image" />
                                    </div>
                                    <div className="description">
                                        <p>{product.detail}</p>
                                        <p>{product.price}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
