import './footer.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import RoomIcon from '@mui/icons-material/Room';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';

export default function Footer() {

    const [showFooterUp, setShowFooterUp] = useState(false);

    const toggleFooterUp = () => {
        setShowFooterUp(!showFooterUp);
    };

    return (
        <div id="footer" className='footer'>
            <div className={`container ${showFooterUp ? 'show' : 'hide'}`}>
                <div className='footerup'>
                    <div className="footerleft">
                        <div className="footersocial">
                            <img src="./images/logo.png" alt="" />
                            <div className='socialicons'>
                                <FacebookIcon />
                                <InstagramIcon />
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
                        <FacebookIcon />
                        <InstagramIcon />
                        <p className={`${showFooterUp ? 'hide' : 'show'}`}>Find out more about IceBerti</p>
                        <KeyboardArrowUpIcon className={`arrowupfooter ${showFooterUp ? 'hide' : 'show'}`} onClick={toggleFooterUp} />

                    </div>
                </div>
            </div>
        </div>
    )
}
