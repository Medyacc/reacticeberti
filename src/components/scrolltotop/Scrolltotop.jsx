import { useEffect } from 'react';
import './scrolltotop.css'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

export default function Scrolltotop() {

    useEffect(() => {
        const upButton = document.querySelector('.upButton');

        const handleScroll = () => {
            if (window.scrollY >= 100) {
                upButton.style.display = 'block';
            } else {
                upButton.style.display = 'none';
            }
        };

        const handleClick = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };

        window.addEventListener('scroll', handleScroll);
        upButton.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            upButton.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <div className="upButton">
            <KeyboardDoubleArrowUpIcon className='scrollBtn' />
        </div>
    )
}
