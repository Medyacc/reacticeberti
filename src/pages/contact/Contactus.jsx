import './contactus.css'
import Nav from '../../components/navbar/Nav'
import Footer from '../../components/footer/Footer'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';

export default function Contactus() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_s461wur',
            'template_0lz60vf',
            formData,
            'rDH4k1JzGS4KW98YL'
        ).then((result) => {
            alert('Message Sent Successfully');
        }).catch((error) => {
            console.error('Error:', error);
            alert('Failed to send the message');
        });
    };

    const { t } = useTranslation();

    return (
        <div className='contactus'>
            <Nav />
            <div className='container'>
                <h1>{t("navbar.contactus")}</h1>
                <div className='form-container'>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor='name'>Name:</label>
                            <input type="text" id='name' name="name" value={formData.name} onChange={handleChange} placeholder='Your name' required />
                        </div>
                        <div>
                            <label htmlFor='email'>Email:</label>
                            <input type="email" id='email' name="email" value={formData.email} onChange={handleChange} placeholder='Your email' required />
                        </div>
                        <div>
                            <label htmlFor='message'>Message:</label>
                            <textarea id='message' name="message" value={formData.message} onChange={handleChange} placeholder='Your message' required />
                        </div>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}
