import React, { useState } from 'react';
import './Verification.css';



const Verification = () => {
    const [certificateID, setCertificateID] = useState('');
    const [error, setError] = useState('');

    const handleVerify = (e) => {
        e.preventDefault();
        setError('');

        // Simulated verification
        if (certificateID === '123456') {
            window.open('https://www.credly.com/badges/example-badge-link', '_blank');
        } else {
            setError('Invalid Certificate ID. Please try again.');
        }
    };

    return (
        <div className="verification-container">
            <div className="verification-content">
                <h1>CodEdge Certificate Verification</h1>
                <p>Enter your Certificate ID to verify and access your achievement.</p>
                <form className="verification-form" onSubmit={handleVerify}>
                    <div className="input-group">
                        <input
                            type="text"
                            value={certificateID}
                            onChange={(e) => setCertificateID(e.target.value)}
                            placeholder="Enter Certificate ID"
                            required
                        />
                        <button type="submit" className="verify-button">
                            Verify
                        </button>
                    </div>
                    {error && <p className="error-message">{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default Verification;
