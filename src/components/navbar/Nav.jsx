import './nav.css'
import i18n from "i18next";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import RoomIcon from '@mui/icons-material/Room';


export default function Nav() {

    const [mobileMenu, setMobileMenu] = useState(false)
    const [scrolled, setScrolled] = useState(false);

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
    };


    useEffect(() => {
        if (mobileMenu) {
            document.body.classList.add('body-overflow-hidden');
        } else {
            document.body.classList.remove('body-overflow-hidden');
        }
    }, [mobileMenu]);

    useEffect(() => {
        let scroolicon = document.querySelector(".scrollicon");
        let navCenter = document.querySelector(".navCenter");

        setTimeout(() => {
            if (navCenter) {
                navCenter.style.opacity = 1;
                navCenter.style.top = '50%';
            }
        }, 100);
        setTimeout(() => {
            if (scroolicon) {
                scroolicon.style.opacity = 1;
                scroolicon.style.bottom = 0;
            }
        }, 400);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const { t } = useTranslation();

    return (
        <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className='navMenu'>
                <div className='container'>
                    {
                        mobileMenu ? <CloseIcon className='burgerMenu' onClick={() => setMobileMenu(false)} /> :
                            <MenuIcon className='burgerMenu' onClick={() => setMobileMenu(true)} />
                    }
                    <div className='navLeft'>
                        <div className={`logo ${scrolled ? 'hide-logo' : ''}`}>
                            <h1 className={` ${scrolled ? 'show-title' : 'hide-title'}`}>Ice Berti<span>Mirleft</span></h1>
                            <img src="./images/logo.webp" alt="" />
                        </div>
                        <ul className={`navLinks ${mobileMenu && "navlinksMobile"}`}>
                            <a href='#menu' onClick={() => setMobileMenu(false)}><li>{t("navbar.menu")}</li></a>
                            <a href='#visitus' onClick={() => setMobileMenu(false)}><li>{t("navbar.visitus")}</li></a>
                            <a href='#story' onClick={() => setMobileMenu(false)}><li>{t("navbar.story")}</li></a>
                        </ul>
                    </div>
                    <div className='navRight'>
                        <div className='languages'>
                            <span onClick={() => handleLanguageChange('en')}>En</span>
                            <span onClick={() => handleLanguageChange('fr')}>Fr</span>
                            <span onClick={() => handleLanguageChange('de')}>De</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='navCenter'>
                <h2>{t("navInfo")}</h2>
                <div className='navCenterBtn'>
                    <a href="#visitus"><RoomIcon className='navCenterBtnIcon' />{t("btnnavbar.direction")}</a>
                </div>
            </div>
            <a href='#story'><img className='scrollicon' src="./images/scroll.svg" alt="" /></a>
        </div>
    )
}
