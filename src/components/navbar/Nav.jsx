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
    const [selectedLanguage, setSelectedLanguage] = useState('en');
    const [dropdownOpen, setDropdownOpen] = useState(false);


    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
        setSelectedLanguage(lang);
        setDropdownOpen(false);
        localStorage.setItem('selectedLanguage', lang);
    };

    useEffect(() => {
        const savedLanguage = localStorage.getItem('selectedLanguage');
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
            setSelectedLanguage(savedLanguage);
        }
    }, []);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
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


    const { t } = useTranslation();

    const languages = {
        en: { name: 'English', flag: './images/en.webp' },
        fr: { name: 'Français', flag: './images/fr.webp' },
        de: { name: 'Deutsch', flag: './images/de.webp' }
    };

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
                            <img className={` ${scrolled ? 'showlogo2' : 'hidelogo2'}`} src="./images/logo2.webp" alt="" />
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
                            <span onClick={toggleDropdown}>
                                <img src={languages[selectedLanguage].flag} alt="" className="flag-icon" />
                                {languages[selectedLanguage].name}
                            </span>
                            {dropdownOpen && (
                                <div className='languagesDropdown'>
                                    {Object.keys(languages).map((lang) => (
                                        lang !== selectedLanguage && (
                                            <span key={lang} onClick={() => handleLanguageChange(lang)}>
                                                <img src={languages[lang].flag} alt="" className="flag-icon" />
                                                {languages[lang].name}
                                            </span>
                                        )
                                    ))}
                                </div>
                            )}
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
            <a href='#story'><img className='scrollicon' src="./images/scroll.webp" alt="" /></a>
        </div>
    )
}
