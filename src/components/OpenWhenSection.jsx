import { useState } from 'react';
import './OpenWhenSection.css';
import { config } from '../config';

function OpenWhenSection() {
    const [selectedEnvelope, setSelectedEnvelope] = useState(null);

    const openEnvelope = (envelope) => {
        setSelectedEnvelope(envelope);
    };

    const closeModal = () => {
        setSelectedEnvelope(null);
    };

    return (
        <div className="open-when-section">
            <div className="container">
                <h2 className="section-title text-center mb-lg">Open When... 💌</h2>
                <p className="section-subtitle text-center mb-xl">
                    Click on an envelope to reveal a special message
                </p>

                <div className="envelopes-grid">
                    {config.envelopes.map((envelope, index) => (
                        <div
                            key={envelope.id}
                            className="envelope-card glass glass-hover fade-in"
                            onClick={() => openEnvelope(envelope)}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="envelope-icon">✉️</div>
                            <h3 className="envelope-label">{envelope.label}</h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedEnvelope && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content glass" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={closeModal}>
                            ✕
                        </button>

                        <div className="modal-header">
                            <div className="opened-envelope-icon">💖</div>
                            <h3>{selectedEnvelope.label}</h3>
                        </div>

                        <div className="modal-body">
                            {selectedEnvelope.image && (
                                <img
                                    src={selectedEnvelope.image}
                                    alt={selectedEnvelope.label}
                                    className="envelope-image"
                                />
                            )}

                            <p className="envelope-message">{selectedEnvelope.content}</p>

                            {selectedEnvelope.link && (
                                <a
                                    href={selectedEnvelope.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary mt-md"
                                >
                                    Open Link 🔗
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default OpenWhenSection;
