import React, { useState, useEffect } from 'react';

const Eniconnect = () => {
    const [displayText, setDisplayText] = useState('');
    const fullText = 'ENIconnecT';
    const animationSpeed = 500; // Speed in milliseconds

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayText(fullText.slice(0, index + 1));
            index++;
            if (index === fullText.length) {
                setTimeout(() => {
                    let reverseIndex = fullText.length;
                    const reverseInterval = setInterval(() => {
                        reverseIndex--;
                        setDisplayText(fullText.slice(0, reverseIndex));
                        if (reverseIndex === 0) {
                            clearInterval(reverseInterval);
                            index = 0; // Restart animation
                        }
                    }, animationSpeed);
                }, animationSpeed * 2); // Pause before reversing
                clearInterval(interval);
            }
        }, animationSpeed);

        return () => clearInterval(interval);
    }, []);

    const getStyledText = (text) => {
        return text.split('').map((char, index) => {
            const color =
                index >= 3 && index <= 8
                    ? '#FFCC00' // Yellow for "connec"
                    : '#0F1C82'; // Blue for the rest
            return (
                <span key={index} style={{ color }}>
                    {char}
                </span>
            );
        });
    };

    return (
        <main style={{ textAlign: 'left', marginTop: '50px', height: '100vh' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>
                {getStyledText(displayText)}
            </h1>
        </main>
    );
};

export default Eniconnect;
