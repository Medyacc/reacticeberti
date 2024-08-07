import './footer.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import RoomIcon from '@mui/icons-material/Room';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
    return (
        <div id="footer" className='footer'>
            <div className='container'>
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
                </div>
            </div>
        </div>
    )
}
