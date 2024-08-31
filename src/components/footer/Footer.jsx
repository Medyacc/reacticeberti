import './footer.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import RoomIcon from '@mui/icons-material/Room';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    const [showFooterUp, setShowFooterUp] = useState(false);
    const [isManuallyOpened, setIsManuallyOpened] = useState(false);
    const date = new Date()
    const dateyear = date.getFullYear()

    const toggleFooterUp = () => {
        setShowFooterUp(!showFooterUp);
        setIsManuallyOpened(!showFooterUp);
    };

    const handleScroll = () => {
        if (isManuallyOpened) return;

        const scrollPosition = window.innerHeight + window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;

        if (scrollPosition >= documentHeight) {
            setShowFooterUp(true);
        } else {
            setShowFooterUp(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isManuallyOpened]);


    return (
        <div id="footer" className='footer'>
            <div className={`container ${showFooterUp ? 'show' : 'hide'}`}>
                <div className='footerup'>
                    <div className="footerleft">
                        <div className="footersocial">
                            <img src="./images/logo.webp" alt="" />
                            <div className='socialicons'>
                                <a href='https://www.facebook.com/IceBertiMirleft' target='_blank'><FacebookIcon /></a>
                                <a href='https://www.instagram.com/icebertimirleft/' target='_blank'><InstagramIcon /></a>
                            </div>
                        </div>
                        <div className="footerplace">
                            <p><RoomIcon className='footerplaceIcon' /> Opposite the Post Office, Center Mirleft, Morocco, 85352</p>
                            <a href='mailto:info@icebertimirlet.com'><MailOutlineIcon className='footerplaceIcon' /> info@icebertimirlet.com</a>
                        </div>
                    </div>
                    <div className="footerright">
                        <div className='footerprivacy'>
                            <Link to="/reacticeberti/privacy"><KeyboardArrowRightIcon /><span>Privacy Policy</span></Link>
                            <Link to="/reacticeberti/terms"><KeyboardArrowRightIcon /><span>Terms and Conditions</span></Link>
                            <Link to="/reacticeberti/faqs"><KeyboardArrowRightIcon /><span>FAQs</span></Link>
                        </div>
                        <div className='footercontactus'>
                            <a>Contact Us</a>
                        </div>
                        <KeyboardArrowDownIcon className={`arrowdownfooter ${showFooterUp ? 'show' : 'hide'}`} onClick={toggleFooterUp} />
                    </div>
                </div>
            </div>
            <div className='copyright'>
                <div className='container'>
                    <p>Copyright  &#169; {dateyear} All Rights Reserved by <span><a href="https://icebertimirleft.com" target="_blank">Ice Berti Mirleft</a> | Designe by <a href="https://raqamify.com" target="_blank">Raqamify</a></span></p>
                    <div className='socialicons'>
                        <a href='https://www.facebook.com/IceBertiMirleft' target='_blank'><FacebookIcon /></a>
                        <a href='https://www.instagram.com/icebertimirleft/' target='_blank'><InstagramIcon /></a>
                        <p className={`${showFooterUp ? 'hide' : 'show'}`}>Find out more about IceBerti</p>
                        <KeyboardArrowUpIcon className={`arrowupfooter ${showFooterUp ? 'hide' : 'show'}`} onClick={toggleFooterUp} />

                    </div>
                </div>
            </div>
        </div>
    )
}
