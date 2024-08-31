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
                    <p>Opposite the Post Office</p>
                    <p>Center Mirleft</p>
                    <p>Morocco, 85352</p>
                    <a>Get Directions</a>
                </div>
                <div className="numphone">
                    <h3>Contact</h3>
                    <p><PhoneIcon className='phoneIcon' /> +212 676-173597</p>
                </div>
                <div className="hours">
                    <h3>Hours</h3>
                    <p><span>Sun</span>9 A.M.- 9:30 P.M</p>
                    <p><span>Mun</span>9 A.M.- 9:30 P.M</p>
                    <p><span>Tue</span>9 A.M.- 9:30 P.M</p>
                    <p><span>Wed</span>9 A.M.- 9:30 P.M</p>
                    <p><span>Thu</span>9 A.M.- 9:30 P.M</p>
                    <p><span>Fri</span>9 A.M.- 9:30 P.M</p>
                    <p><span>Sat</span>9 A.M.- 9:30 P.M</p>
                </div>
            </div>
        </div>
    )
}
