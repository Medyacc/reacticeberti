import './productsmenu.css'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import StarIcon from '@mui/icons-material/Star';

export default function Productsmenu({ menuProducts, selectedCategory }) {


    const [parent] = useAutoAnimate()

    const filteredProducts = menuProducts.filter(
        product => product.name === selectedCategory.name
    );




    return (
        <div className='productsmenu'>
            <div className='boxMenu'>
                <div className='container'>
                    <div className="productMenu" ref={parent}>
                        <img src={selectedCategory.bg} alt="" />
                        <div className="productInfo">

                            {
                                filteredProducts.map((product, i) => (
                                    <div key={i}>
                                        <p><StarIcon className='starIcon' />{product.detail}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
