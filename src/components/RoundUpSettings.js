import React, { useState, useEffect } from 'react';
import { useWallet } from '../context/WalletProvider';
import { FiSave, FiSettings, FiDollarSign, FiRefreshCw, FiTrendingUp } from 'react-icons/fi';

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
        <div className="space-y-6">
            {/* Header */}
            <div className="text-center pb-4 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center justify-center space-x-2">
                    <FiDollarSign className="w-6 h-6 text-green-600" />
                    <span>Auto-Save CHZ</span>
                </h3>
                <p className="text-gray-600">
                    Automatically save a fixed amount of CHZ with every transaction
                </p>
            </div>

            {/* Savings Summary */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="p-2 bg-green-100 rounded-lg">
                            <FiTrendingUp className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                            <span className="text-sm font-medium text-green-800">Total Saved</span>
                            <div className="text-2xl font-bold text-green-900">
                                {totalSaved.toFixed(2)} CHZ
                            </div>
                        </div>
                    </div>
                    <div className="text-right">
                        {isRoundUpActive ? (
                            <div className="flex items-center space-x-2 text-blue-600">
                                <FiRefreshCw className="w-4 h-4 animate-spin" />
                                <span className="text-sm font-medium">Processing Auto-Save...</span>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-2 text-green-600">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-soft"></div>
                                <span className="text-sm font-medium">Ready</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Settings Form */}
            <div className="bg-gray-50 rounded-xl p-6">
                <div className="space-y-6">
                    {/* Enable Auto-Save */}
                    <div className="space-y-3">
                        <label className="flex items-center space-x-3 cursor-pointer">
                            <div className="relative">
                                <input
                                    type="checkbox"
                                    checked={localSettings.enabled}
                                    onChange={(e) => handleSettingChange('enabled', e.target.checked)}
                                    className="sr-only"
                                />
                                <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-200 ${
                                    localSettings.enabled 
                                        ? 'bg-green-500 border-green-500' 
                                        : 'border-gray-300 hover:border-gray-400'
                                }`}>
                                    {localSettings.enabled && (
                                        <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    )}
                                </div>
                            </div>
                            <span className="text-lg font-medium text-gray-900">Enable Auto-Save</span>
                        </label>
                        <p className="text-sm text-gray-600 ml-9">
                            Automatically save CHZ with every transaction you make
                        </p>
                    </div>

                    {/* Settings Options */}
                    {localSettings.enabled && (
                        <div className="space-y-6 pl-9">
                            {/* Fixed Amount */}
                            <div className="space-y-3">
                                <label className="block text-sm font-medium text-gray-700">
                                    Fixed amount to save per transaction:
                                </label>
                                <select
                                    value={localSettings.fixedAmount}
                                    onChange={(e) => handleSettingChange('fixedAmount', parseFloat(e.target.value))}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                                >
                                    <option value={0.5}>0.5 CHZ</option>
                                    <option value={1}>1 CHZ</option>
                                    <option value={2}>2 CHZ</option>
                                    <option value={5}>5 CHZ</option>
                                    <option value={10}>10 CHZ</option>
                                    <option value={20}>20 CHZ</option>
                                    <option value={50}>50 CHZ</option>
                                </select>
                                <p className="text-sm text-gray-600">
                                    This exact amount will be saved with every transaction
                                </p>
                            </div>

                            {/* Daily Limit */}
                            <div className="space-y-3">
                                <label className="block text-sm font-medium text-gray-700">
                                    Maximum to save per day:
                                </label>
                                <select
                                    value={localSettings.maxPerDay}
                                    onChange={(e) => handleSettingChange('maxPerDay', parseInt(e.target.value))}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                                >
                                    <option value={10}>10 CHZ</option>
                                    <option value={25}>25 CHZ</option>
                                    <option value={50}>50 CHZ</option>
                                    <option value={100}>100 CHZ</option>
                                    <option value={200}>200 CHZ</option>
                                    <option value={500}>500 CHZ</option>
                                </select>
                                <p className="text-sm text-gray-600">
                                    Daily limit to prevent excessive savings
                                </p>
                            </div>

                            {/* How it Works */}
                            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                                <h4 className="text-lg font-semibold text-blue-900 mb-3 flex items-center space-x-2">
                                    <span>💡</span>
                                    <span>How it works:</span>
                                </h4>
                                <div className="space-y-2 text-sm text-blue-800">
                                    <p><strong>Every time you make a transaction:</strong></p>
                                    <div className="ml-4 space-y-1">
                                        <p>→ You get a second MetaMask popup</p>
                                        <p>→ It asks you to sign a <strong>{localSettings.fixedAmount} CHZ</strong> transfer</p>
                                        <p>→ This amount goes to your savings account</p>
                                        <p>→ Works regardless of your original transaction amount</p>
                                    </div>
                                </div>
                                
                                <div className="mt-4 space-y-2">
                                    <div className="bg-white bg-opacity-60 rounded-lg p-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium text-blue-700">Example 1:</span>
                                            <span className="text-sm text-blue-800">Send 0.0001 CHZ → Save {localSettings.fixedAmount} CHZ</span>
                                        </div>
                                    </div>
                                    <div className="bg-white bg-opacity-60 rounded-lg p-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium text-blue-700">Example 2:</span>
                                            <span className="text-sm text-blue-800">Send 100 CHZ → Save {localSettings.fixedAmount} CHZ</span>
                                        </div>
                                    </div>
                                    <div className="bg-white bg-opacity-60 rounded-lg p-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium text-blue-700">Example 3:</span>
                                            <span className="text-sm text-blue-800">Send 0.01 CHZ → Save {localSettings.fixedAmount} CHZ</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Save Button */}
                    {hasChanges && (
                        <div className="pt-4 border-t border-gray-200">
                            <button 
                                onClick={handleSaveSettings}
                                disabled={isSaving}
                                className={`w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 ${
                                    isSaving 
                                        ? 'opacity-50 cursor-not-allowed' 
                                        : 'hover:bg-gray-800'
                                }`}
                            >
                                {isSaving ? (
                                    <>
                                        <FiRefreshCw className="w-5 h-5 animate-spin" />
                                        <span>Saving...</span>
                                    </>
                                ) : (
                                    <>
                                        <FiSave className="w-5 h-5" />
                                        <span>Save Settings</span>
                                    </>
                                )}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AutoSaveSettings; 