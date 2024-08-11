import { useTranslation } from 'react-i18next';
import './truncatetext.css'
import { useState } from "react";

export default function TruncateText({ text, maxLength }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const truncatedText = text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

    const { t } = useTranslation();

    return (
        <p className='truncatedtext'>
            {isExpanded ? text : truncatedText}
            {text.length > maxLength && (
                <span
                    className="toggle-text"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {isExpanded ? t("purewater.showless") : t("purewater.readmore")}
                </span>
            )}
        </p>
    );
}
