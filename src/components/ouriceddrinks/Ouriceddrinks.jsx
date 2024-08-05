import './ouriceddrinks.css'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function Ouriceddrinks() {
    return (
        <div className='ouriceddrinks'>
            <div className='container'>
                <div className='ouriceddrinksUp'>
                    <img src="./images/coffeecup.png" alt="" />
                    <p>Our iced drinks feature the same great coffee, served over ice</p>
                </div>
                <div className='ouriceddrinksDown'>
                    <div className='ouriceddrinksDownInfo'>
                        <h2>Our menu's full of the good stuff</h2>
                        <p>Whatever your diet or preferences, there's enough choice for everyone.</p>
                        <button>Find out more <ArrowRightIcon className='arrowRightIcon' /></button>
                    </div>
                    <div className='ouriceddrinksDownImg'>
                        <img src="./images/icecoffee.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
