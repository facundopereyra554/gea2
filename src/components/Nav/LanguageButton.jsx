import { useState } from 'react';
import './Navbar.css'; 

const LanguageButton = ({ setLocale, locale }) => {

    const [language, setLanguage] = useState(locale === 'es' ? 'ES' : 'EN');

    const toggleLanguage = () => {
        const newLanguage = locale === 'es' ? 'en' : 'es';
        setLanguage(newLanguage);
        setLocale(newLanguage.toLowerCase()); 
    };

    return (
        <div className="language-toggle">
            <button 
                className={`language-button ${language === 'ES' ? 'active' : ''}`}
                onClick={toggleLanguage}>
                ES
            </button>
            <button 
                className={`language-button ${language === 'EN' ? 'active' : ''}`}
                onClick={toggleLanguage}>
                EN
            </button>
        </div>
    );
};

export default LanguageButton;