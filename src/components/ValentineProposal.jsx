import { useState } from 'react';
import './ValentineProposal.css';
import { config } from '../config';

function ValentineProposal({ onAccept }) {
    const [noButtonPosition, setNoButtonPosition] = useState({ top: '60%', left: '35%' });
    const [noButtonSize, setNoButtonSize] = useState(1);
    const [yesButtonSize, setYesButtonSize] = useState(1);
    const [hoverCount, setHoverCount] = useState(0);

    const handleNoHover = () => {
        // Move the "No" button to a random position
        const randomTop = Math.random() * 70 + 10; // 10% to 80%
        const randomLeft = Math.random() * 70 + 10; // 10% to 80%

        setNoButtonPosition({
            top: `${randomTop}%`,
            left: `${randomLeft}%`,
        });

        // Make "No" button smaller and "Yes" button bigger
        const newHoverCount = hoverCount + 1;
        setHoverCount(newHoverCount);
        setNoButtonSize(Math.max(0.3, 1 - newHoverCount * 0.1));
        setYesButtonSize(1 + newHoverCount * 0.15);
    };

    return (
        <div className="valentine-proposal">
            {/* Animated Background Hearts */}
            <div className="hearts-background">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="heart"
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${5 + Math.random() * 5}s`,
                        }}
                    >
                        ❤️
                    </div>
                ))}
            </div>

            <div className="proposal-content fade-in">
                <h1 className="proposal-title">
                    {config.partnerName},
                </h1>
                <h2 className="proposal-question">
                    Will you be my Valentine? 💖
                </h2>

                <div className="buttons-container">
                    <button
                        className="btn btn-primary yes-button"
                        onClick={onAccept}
                        style={{
                            transform: `scale(${yesButtonSize})`,
                            transition: 'transform 0.3s ease',
                        }}
                    >
                        Yes! 💕
                    </button>

                    <button
                        className="btn btn-secondary no-button"
                        onMouseEnter={handleNoHover}
                        onTouchStart={handleNoHover}
                        style={{
                            position: 'absolute',
                            top: noButtonPosition.top,
                            left: noButtonPosition.left,
                            transform: `scale(${noButtonSize})`,
                            transition: 'all 0.3s ease',
                        }}
                    >
                        No
                    </button>
                </div>

                {hoverCount > 3 && (
                    <p className="hint-text fade-in">
                        Come on... you know you want to say yes! 😊
                    </p>
                )}
            </div>
        </div>
    );
}

export default ValentineProposal;
