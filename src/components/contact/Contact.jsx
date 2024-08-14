import { useTranslation } from 'react-i18next';
import './contact.css'
import PhoneIcon from '@mui/icons-material/Phone';

export default function Contact() {

    const { t } = useTranslation();

    return (
        <div className='contact'>
            <div className='container'>
                <div className="address">
                    <h3>Address</h3>
                    <p>Showgate Center</p>
                    <p>Corner Curie Avenue & Passteur Drive</p>
                    <p>Bloemfontein 9300</p>
                    <a>Get Directions</a>
                </div>
                <div className="numphone">
                    <h3>Contact</h3>
                    <p><PhoneIcon className='phoneIcon' /> 051 447 8046</p>
                </div>
                <div className="hours">
                    <h3>Hours</h3>
                    <p><span>Sun</span> Open 24 hours</p>
                    <p><span>Mun</span> Open 24 hours</p>
                    <p><span>Tue</span> Open 24 hours</p>
                    <p><span>Wed</span> Open 24 hours</p>
                    <p><span>Thu</span> Open 24 hours</p>
                    <p><span>Fri</span> Open 24 hours</p>
                    <p><span>Sat</span> Open 24 hours</p>
                </div>
            </div>
        </div>
    )
}
