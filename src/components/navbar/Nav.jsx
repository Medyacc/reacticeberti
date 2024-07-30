import './nav.css'
import RoomIcon from '@mui/icons-material/Room';
import i18n from "i18next";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Nav() {

    const [mobileMenu, setMobileMenu] = useState(false)

    const [showOptions, setShowOptions] = useState(false);

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
        setShowOptions(false);
    };

    useEffect(() => {
        document.body.dir = i18n.dir();
    }, [i18n.language]);

    const { t } = useTranslation();

    return (
        <div className='navbar'>
            <div className='navbarcontainer'>
                <div className='navMenu'>
                    {
                        mobileMenu ? <CloseIcon className='burgerMenu' onClick={() => setMobileMenu(prev => !prev)} /> :
                            <MenuIcon className='burgerMenu' onClick={() => setMobileMenu(prev => !prev)} />
                    }
                    <div className='navLeft'>
                        <div className='logo'>
                            <img src="./images/logolight.png" alt="logo" />
                        </div>
                        <ul className={`navLinks ${mobileMenu && "navlinksMobile"}`}>
                            <a><li>{t("navbar.home")}</li></a>
                            <a><li>{t("navbar.story")}</li></a>
                            <a><li>{t("navbar.menu")}</li></a>
                            <a><li>{t("navbar.contact")}</li></a>
                        </ul>
                    </div>
                    <div className='navRight'>
                        <RoomIcon className='iconGps' />
                        <div className='languages'>
                            <div className='language-selector' onClick={() => setShowOptions(!showOptions)}>
                                {i18n.language === 'en' && 'English'}
                                {i18n.language === 'fr' && 'Français'}
                                {i18n.language === 'ar' && 'العربية'}
                            </div>
                            {showOptions && (
                                <ul className='language-options'>
                                    <li onClick={() => handleLanguageChange('en')}>{t('language.en')}</li>
                                    <li onClick={() => handleLanguageChange('fr')}>{t('language.fr')}</li>
                                    <li onClick={() => handleLanguageChange('ar')}>{t('language.ar')}</li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
                <div className='navCenter'>
                    <h2>{t("navInfo")}</h2>
                    <img src="./images/logolight.png" alt="logo" />
                </div>
            </div>
        </div>
    )
}
