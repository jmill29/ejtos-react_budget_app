import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { expenses, budget, dispatch, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        let userInput = event.target.value;
        if (userInput >= 0 && userInput <= 20000) {
            setNewBudget(userInput);
        }
    };
    const handleKeyUp = (event) => {
        if (event.key === 'Enter') {
            const totalExpenses = expenses.reduce((acc, item) => {
                return acc + item.cost;
            }, 0);
            if (newBudget >= totalExpenses && newBudget <= 20000) {
                dispatch({
                    type: 'SET_BUDGET',
                    payload: newBudget
                });
                setNewBudget('');
            } else {
                if (newBudget > 20000) {
                  alert(`Budget cannot exceed ${currency}20,000`);
                } else if (newBudget < totalExpenses) {
                  alert(`Budget must be greater than the spending already allocated: ${currency}` + totalExpenses);
                }
            }
        }
    }
    
    return (
        <div className='alert alert-secondary' style={{display: 'flex', alignItems: 'center'}}>
            <span>Budget: </span>
            <label htmlFor='budget' style={{marginLeft: '5px'}}>{currency}</label>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}
                onKeyUp={handleKeyUp} id="budget"></input>
        </div>
    );
};
export default Budget;