import React, { useState, useEffect } from 'react';
import { useWallet } from '../context/WalletProvider';
import './RoundUpSettings.css';

const AutoSaveSettings = () => {
    const { roundUpSettings, updateRoundUpSettings, isRoundUpActive, totalSaved } = useWallet();
    const [localSettings, setLocalSettings] = useState(roundUpSettings);
    const [isSaving, setIsSaving] = useState(false);

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
        setIsSaving(true);
        try {
            await updateRoundUpSettings(localSettings);
            console.log('✅ GoodStake settings saved successfully');
        } catch (error) {
            console.error('❌ Failed to save GoodStake settings:', error);
            alert('Failed to save settings. Please try again.');
        } finally {
            setIsSaving(false);
        }
    };

    const hasChanges = JSON.stringify(localSettings) !== JSON.stringify(roundUpSettings);

    return (
        <div className="roundup-settings">
            <div className="settings-header">
                <h3>💰 Auto-Save CHZ</h3>
                <p className="settings-description">
                    Automatically save a fixed amount of CHZ with every transaction
                </p>
            </div>

            <div className="savings-summary">
                <div className="savings-stat">
                    <span className="stat-label">Total Saved</span>
                    <span className="stat-value">{totalSaved.toFixed(2)} CHZ</span>
                </div>
                <div className="savings-status">
                    {isRoundUpActive ? (
                        <span className="status-active">🔄 Processing Auto-Save...</span>
                    ) : (
                        <span className="status-ready">✅ Ready</span>
                    )}
                </div>
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
                        Enable Auto-Save
                    </label>
                    <p className="setting-description">
                        Automatically save CHZ with every transaction you make
                    </p>
                </div>

                {localSettings.enabled && (
                    <>
                        <div className="setting-group">
                            <label className="setting-label">
                                Fixed amount to save per transaction:
                            </label>
                            <select
                                value={localSettings.fixedAmount}
                                onChange={(e) => handleSettingChange('fixedAmount', parseFloat(e.target.value))}
                                className="setting-select"
                            >
                                <option value={0.5}>0.5 CHZ</option>
                                <option value={1}>1 CHZ</option>
                                <option value={2}>2 CHZ</option>
                                <option value={5}>5 CHZ</option>
                                <option value={10}>10 CHZ</option>
                                <option value={20}>20 CHZ</option>
                                <option value={50}>50 CHZ</option>
                            </select>
                            <p className="setting-description">
                                This exact amount will be saved with every transaction
                            </p>
                        </div>

                        <div className="setting-group">
                            <label className="setting-label">
                                Maximum to save per day:
                            </label>
                            <select
                                value={localSettings.maxPerDay}
                                onChange={(e) => handleSettingChange('maxPerDay', parseInt(e.target.value))}
                                className="setting-select"
                            >
                                <option value={10}>10 CHZ</option>
                                <option value={25}>25 CHZ</option>
                                <option value={50}>50 CHZ</option>
                                <option value={100}>100 CHZ</option>
                                <option value={200}>200 CHZ</option>
                                <option value={500}>500 CHZ</option>
                            </select>
                            <p className="setting-description">
                                Daily limit to prevent excessive savings
                            </p>
                        </div>

                        <div className="example-calculation">
                            <h4>💡 How it works:</h4>
                            <p>
                                <strong>Every time you make a transaction:</strong><br/>
                                → You get a second MetaMask popup<br/>
                                → It asks you to sign a <strong>{localSettings.fixedAmount} CHZ</strong> transfer<br/>
                                → This amount goes to your savings account<br/>
                                → Works regardless of your original transaction amount
                            </p>
                            <div className="example-scenarios">
                                <div className="scenario">
                                    <span className="scenario-label">Example 1:</span>
                                    <span className="scenario-text">Send 0.0001 CHZ → Save {localSettings.fixedAmount} CHZ</span>
                                </div>
                                <div className="scenario">
                                    <span className="scenario-label">Example 2:</span>
                                    <span className="scenario-text">Send 100 CHZ → Save {localSettings.fixedAmount} CHZ</span>
                                </div>
                                <div className="scenario">
                                    <span className="scenario-label">Example 3:</span>
                                    <span className="scenario-text">Send 0.01 CHZ → Save {localSettings.fixedAmount} CHZ</span>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {hasChanges && (
                    <div className="settings-actions">
                        <button 
                            onClick={handleSaveSettings}
                            disabled={isSaving}
                            className="save-settings-btn"
                        >
                            {isSaving ? '⏳ Saving...' : '💾 Save Settings'}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AutoSaveSettings; 