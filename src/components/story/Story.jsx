import './story.css'
import { useTranslation } from 'react-i18next'
import TruncateText from '../truncatetext/Truncatetext'

export default function Story() {

    const { t } = useTranslation();

    return (
        <div id="story" className='story'>
            <div className='container'>
                <div className='storyCard'>
                    <div className='stroyImage'>
                        <img src="./images/story.webp" alt="image" />
                    </div>
                    <div className='stroyInfo'>
                        <h1>{t("story.title")}</h1>
                        <TruncateText text={t("story.description")} maxLength={165} />
                    </div>
                </div>
            </div>
        </div>
    )
}
