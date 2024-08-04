import { useTranslation } from 'react-i18next';
import './story.css'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function Story() {

    const { t } = useTranslation();

    return (
        <div id="story" className='story'>
            <div className='container'>
                <div className='storyCard'>
                    <div className='stroyImage'>
                        <img src="./images/story.jpg" alt="image" />
                    </div>
                    <div className='stroyInfo'>
                        <h1>{t("story.title")}</h1>
                        <p>{t("story.description")}</p>
                        <button>Find out more <ArrowRightIcon className='arrowRightIcon' /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
