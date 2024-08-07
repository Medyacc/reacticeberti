import './productsmenu.css'
import { useAutoAnimate } from '@formkit/auto-animate/react'

export default function Productsmenu({ menuProducts }) {


    const [parent] = useAutoAnimate()




    return (
        <div className='productsmenu'>
            <div className='boxMenu'>

                <div className="productMenu" ref={parent}>
                    {
                        menuProducts.map((product, i) => (
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
