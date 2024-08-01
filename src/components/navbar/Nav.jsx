import './nav.css'
import RoomIcon from '@mui/icons-material/Room';
import i18n from "i18next";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

export default function Nav() {

    const [mobileMenu, setMobileMenu] = useState(false)

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
    };

    useEffect(() => {
        document.body.dir = i18n.dir();
    }, [i18n.language]);


    useEffect(() => {
        if (mobileMenu) {
            document.body.classList.add('body-overflow-hidden');
        } else {
            document.body.classList.remove('body-overflow-hidden');
        }
    }, [mobileMenu]);

    const { t } = useTranslation();

    return (
        <div className='navbar'>
            <div className='container'>
                <div className='navMenu'>
                    {
                        mobileMenu ? <CloseIcon className='burgerMenu' onClick={() => setMobileMenu(false)} /> :
                            <MenuIcon className='burgerMenu' onClick={() => setMobileMenu(true)} />
                    }
                    <div className='navLeft'>
                        <div className='logo'>
                            <h1>{t("logo.title1")}<span>{t("logo.title2")}</span></h1>
                        </div>
                        <ul className={`navLinks ${mobileMenu && "navlinksMobile"}`}>
                            <a href='#' onClick={() => setMobileMenu(false)}><li>{t("navbar.home")}</li></a>
                            <a href='#story' onClick={() => setMobileMenu(false)}><li>{t("navbar.story")}</li></a>
                            <a href='#menu' onClick={() => setMobileMenu(false)}><li>{t("navbar.menu")}</li></a>
                            <a href='#contact' onClick={() => setMobileMenu(false)}><li>{t("navbar.contact")}</li></a>
                        </ul>
                    </div>
                    <div className='navRight'>
                        <RoomIcon className='iconGps' />
                        <div className='languages'>
                            <div className='language-selector'>
                                {i18n.language === 'en' && 'English'}
                                {i18n.language === 'fr' && 'Français'}
                                {i18n.language === 'ar' && 'العربية'}
                            </div>
                            <ul className='language-options'>
                                <li onClick={() => handleLanguageChange('en')}>{t('language.en')}</li>
                                <li onClick={() => handleLanguageChange('fr')}>{t('language.fr')}</li>
                                <li onClick={() => handleLanguageChange('ar')}>{t('language.ar')}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='navCenter'>
                    <h2>{t("navInfo")}</h2>
                </div>
            </div>
            <a href='#story'><KeyboardDoubleArrowDownIcon className='arrowDoubleDown' /></a>
        </div>
    )
}
