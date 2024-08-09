import './productsmenu.css'
import { useAutoAnimate } from '@formkit/auto-animate/react'

export default function Productsmenu({ menuProducts, selectedCategory }) {


    const [parent] = useAutoAnimate()

    const filteredProducts = menuProducts.filter(
        product => product.name === selectedCategory
    );




    return (
        <div className='productsmenu'>
            <div className='boxMenu'>

                <div className="productMenu" ref={parent}>
                    {
                        filteredProducts.map((product, i) => (
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
    )
}
