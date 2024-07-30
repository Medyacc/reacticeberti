import { useTranslation } from 'react-i18next';
import './story.css'

export default function Story() {

    const { t } = useTranslation();

    return (
        <div className='story'>
            <div className='container'>
                <div className='storyCard'>
                    <div className='stroyInfo'>
                        <h1>{t("story.title")}</h1>
                        <p>{t("story.description")}</p>
                    </div>
                    <div className='stroyImage'>
                        <img src="./images/story.jpg" alt="image" />
                    </div>
                </div>
            </div>
        </div>
    )
}
