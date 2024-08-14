import { useTranslation } from 'react-i18next';
import './contact.css'

export default function Contact() {

    const { t } = useTranslation();

    return (
        <div className='contact'>
            <div className="address"></div>
            <div className="contact"></div>
            <div className="hours"></div>
        </div>
    )
}
