import { useTranslation } from 'react-i18next';
import './ouriceddrinks.css'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function Ouriceddrinks() {

    const { t } = useTranslation();

    return (
        <div className='ouriceddrinks'>
            <div className='container'>
                <div className='ouriceddrinksUp'>
                    <img src="./images/coffeecup.png" alt="" />
                    <p>{t("ouriced.description")}</p>
                </div>
                <div className='ouriceddrinksDown'>
                    <div className='ouriceddrinksDownInfo'>
                        <h2>{t("ouriced.title")}</h2>
                        <p>{t("ouriced.paragraphe")}</p>
                        <button>{t("ouriced.btn")} <ArrowRightIcon className='arrowRightIcon' /></button>
                    </div>
                    <div className='ouriceddrinksDownImg'>
                        <img src="./images/icecoffee.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
