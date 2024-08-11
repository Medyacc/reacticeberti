import './footer.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import RoomIcon from '@mui/icons-material/Room';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useEffect, useState } from 'react';

export default function Footer() {
    const [showFooterUp, setShowFooterUp] = useState(false);
    const [isManuallyOpened, setIsManuallyOpened] = useState(false);

    const toggleFooterUp = () => {
        setShowFooterUp(!showFooterUp);
        setIsManuallyOpened(!showFooterUp);
    };

    const handleScroll = () => {
        const scrollPosition = window.innerHeight + window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;

        if (isManuallyOpened) {
            setShowFooterUp(true);
        } else if (scrollPosition >= documentHeight - 50) {
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
                            <p><RoomIcon className='footerplaceIcon' /> AV MOHAMED 5 EL YOUSSOFIA Tiznit</p>
                            <p><MailOutlineIcon className='footerplaceIcon' /> info@icebertimirlet.com</p>
                        </div>
                    </div>
                    <div className="footerright">
                        <div className='footerprivacy'>
                            <a><KeyboardArrowRightIcon /><span>Privacy Policy</span></a>
                            <a><KeyboardArrowRightIcon /><span>Cookie Policy</span></a>
                            <a><KeyboardArrowRightIcon /><span>Terms and Conditions</span></a>
                        </div>
                        <div className='footerfaq'>
                            <a>FAQs</a>
                            <a>Contact Us</a>
                        </div>
                        <KeyboardArrowDownIcon className={`arrowdownfooter ${showFooterUp ? 'show' : 'hide'}`} onClick={toggleFooterUp} />
                    </div>
                </div>
            </div>
            <div className='copyright'>
                <div className='container'>
                    <p>Copyright  &#169; ice Berti Mirleft. All rights reserved</p>
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
