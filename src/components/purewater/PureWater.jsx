import { useTranslation } from 'react-i18next';
import './purewater.css'

export default function PureWater() {

    const { t } = useTranslation();

    return (
        <div className='purewater'>
            <div className='container'>
                <div className='purewaterCard'>
                    <div className='purewaterInfo'>
                        <h2>{t("purewater.title")}</h2>
                        <p>{t("purewater.description")}</p>
                    </div>
                    <div className='purewaterImg'>
                        <img src="./images/purewater.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
