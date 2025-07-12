import React, { useState, useEffect } from 'react';
import { useWallet } from '../context/WalletProvider';
import './RoundUpSettings.css';

const RoundUpSettings = () => {
    const { 
        roundUpSettings, 
        updateRoundUpSettings, 
        isRoundUpActive, 
        totalSaved,
        isAuthenticated 
    } = useWallet();
    
    const [localSettings, setLocalSettings] = useState(roundUpSettings);
    const [isSaving, setIsSaving] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        setLocalSettings(roundUpSettings);
    }, [roundUpSettings]);

    const handleSettingChange = (key, value) => {
        setLocalSettings(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const handleSaveSettings = async () => {
        if (!isAuthenticated) {
            alert('Please connect your wallet first');
            return;
        }

        setIsSaving(true);
        try {
            await updateRoundUpSettings(localSettings);
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 2000);
        } catch (error) {
            console.error('❌ Failed to save settings:', error);
            alert('Failed to save settings. Please try again.');
        } finally {
            setIsSaving(false);
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="roundup-settings">
                <div className="settings-header">
                    <h3>💰 Round-Up Savings</h3>
                    <p className="settings-description">
                        Connect your wallet to enable round-up savings
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div id="roundup-settings">
            <div id="stat-value">
                <p><strong>${totalSaved.toFixed(2)} CHZ</strong></p>
            </div>
        <div className="roundup-settings">
            <div className="settings-header">
                <h3>💰 Round-Up Savings</h3>
                <p className="settings-description">
                    Automatically save CHZ by rounding up your transactions
                </p>
            </div>
            <div className="settings-form">
                <div className="setting-group">
                    <label className="setting-label">
                        <input
                            type="checkbox"
                            checked={localSettings.enabled}
                            onChange={(e) => handleSettingChange('enabled', e.target.checked)}
                        />
                        <span className="checkbox-custom"></span>
                        Enable Round-Up Savings
                    </label>
                    <p className="setting-description">
                        Automatically round up your transactions and save the difference
                    </p>
                </div>

                {localSettings.enabled && (
                    <>
                        <div className="setting-group">
                            <label className="setting-label">
                                Round up to nearest:
                            </label>
                            <select
                                value={localSettings.roundUpTo}
                                onChange={(e) => handleSettingChange('roundUpTo', parseInt(e.target.value))}
                                className="setting-select"
                            >
                                <option value={1}>1 CHZ</option>
                                <option value={5}>5 CHZ</option>
                                <option value={10}>10 CHZ</option>
                                <option value={25}>25 CHZ</option>
                                <option value={50}>50 CHZ</option>
                                <option value={100}>100 CHZ</option>
                            </select>
                            <p className="setting-description">
                                Choose how much to round up your transactions
                            </p>
                        </div>

                        <div className="setting-group">
                            <label className="setting-label">
                                Maximum round-up per transaction:
                            </label>
                            <select
                                value={localSettings.maxPerTransaction}
                                onChange={(e) => handleSettingChange('maxPerTransaction', parseInt(e.target.value))}
                                className="setting-select"
                            >
                                <option value={5}>5 CHZ</option>
                                <option value={10}>10 CHZ</option>
                                <option value={25}>25 CHZ</option>
                                <option value={50}>50 CHZ</option>
                                <option value={100}>100 CHZ</option>
                            </select>
                            <p className="setting-description">
                                Set a limit on how much can be saved per transaction
                            </p>
                        </div>

                        <div className="example-calculation">
                            <h4>💡</h4>
                            <p>
                                If you send <strong>7.3 CHZ</strong> and round up to <strong>{localSettings.roundUpTo} CHZ</strong>, 
                                you'll save <strong>
                                    {Math.min(
                                        Math.ceil(7.3 / localSettings.roundUpTo) * localSettings.roundUpTo - 7.3,
                                        localSettings.maxPerTransaction
                                    ).toFixed(1)} CHZ
                                </strong> automatically.
                            </p>
                        </div>
                    </>
                )}

                <div className="settings-actions">
                    <button
                        onClick={handleSaveSettings}
                        disabled={isSaving}
                        className={`save-button ${isSaving ? 'saving' : ''}`}
                    >
                        {isSaving ? 'Saving...' : 'Save Settings'}
                    </button>
                    
                    {showSuccess && (
                        <span className="success-message">✅ Settings saved!</span>
                    )}
                </div>
            </div>
        </div>
        </div>
    );
};

export default RoundUpSettings; 