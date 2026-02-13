import { useState } from 'react';
import './VaultLock.css';
import { config } from '../config';

function VaultLock({ onUnlock }) {
    const [code, setCode] = useState('');
    const [error, setError] = useState('');
    const [isShaking, setIsShaking] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (code === config.unlockCode) {
            setError('');
            onUnlock();
        } else {
            setError('Incorrect code. Try again! 💔');
            setIsShaking(true);
            setTimeout(() => setIsShaking(false), 500);
            setCode('');
        }
    };

    return (
        <div className="vault-lock">
            <div className="vault-container fade-in">
                <div className={`vault-door glass ${isShaking ? 'shake' : ''}`}>
                    {/* Decorative Lock Icon */}
                    <div className="lock-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm3 8H9V7c0-1.654 1.346-3 3-3s3 1.346 3 3v3z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>

                    <h2 className="vault-title">Digital Vault of Love</h2>
                    <p className="vault-subtitle">Enter the secret code to unlock</p>

                    <form onSubmit={handleSubmit} className="code-form">
                        <input
                            type="text"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            placeholder="Enter code..."
                            className="code-input glass"
                            autoFocus
                        />

                        {error && <p className="error-message">{error}</p>}

                        <button type="submit" className="btn btn-primary unlock-button">
                            Unlock 🔓
                        </button>
                    </form>

                    <div className="hint">
                        <p>Hint: Think of a special date or number... 💭</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VaultLock;
