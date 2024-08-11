import { useTranslation } from 'react-i18next';
import './purewater.css'
import TruncateText from '../truncatetext/Truncatetext';

export default function PureWater() {

    const { t } = useTranslation();

    return (
        <div className='purewater'>
            <div className='container'>
                <div className='purewaterCard'>
                    <div className='purewaterInfo'>
                        <h2>{t("purewater.title")}</h2>
                        <TruncateText text={t("purewater.description")} maxLength={165} />
                    </div>
                    <div className='purewaterImg'>
                        <img src="./images/purewater.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
