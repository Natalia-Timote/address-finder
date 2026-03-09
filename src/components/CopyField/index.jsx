import { useState } from 'react';
import './CopyField.style.css';

export default function CopyField({ label, value }) {
    const [copied, setCopied] = useState('Copiar');

    function copyText(text) {
        navigator.clipboard.writeText(text);
        setCopied("Copiado!");

        setTimeout(() => {
            setCopied("Copiar");
        }, 1500);
    }

    return (
        <p>
            {label}:
            <span
                className="copy-value"
                onClick={() => copyText(value)}
            >
                {value}
                <span className="tooltip">{copied}</span>
            </span>
        </p>
    )
}
