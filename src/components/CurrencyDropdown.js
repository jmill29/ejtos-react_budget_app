import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
    const { dispatch } = useContext(AppContext);
    const [selectedCurrency, setSelectedCurrency] = useState('Currency (£ Pound)');

    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value
        });
        let currencyVal = '';
        if (event.target.value === '$') {
            currencyVal = 'Dollar';
        } else if (event.target.value === '£') {
            currencyVal = 'Pound';
        } else if (event.target.value === '€') {
            currencyVal = 'Euro';
        } else {
            currencyVal = 'Ruppee';
        }
        setSelectedCurrency(`Currency (${event.target.value} ${currencyVal})`);
    };

    return (
        <div>
            <select onChange={handleCurrencyChange} value="display">
                {/* Hide this default option when the dropdown is expanded */}
                <option value="display" disabled hidden>{selectedCurrency}</option>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
        </div>
    );
};

export default CurrencyDropdown;
