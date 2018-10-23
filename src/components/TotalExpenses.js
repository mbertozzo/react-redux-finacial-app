import React from 'react';
import {formatDollarValues} from '../helpers'

const TotalExpenses = () =>  {
    return (
        <div id="TotalExpenses">
            <h3>Total Monthly Expenses</h3>
            {' '}

            {/* Expense Total */}

            <h3 id="expenses-total">
               ${'   '}{formatDollarValues(300)}
            </h3>
        </div>
    )
}


export default TotalExpenses;