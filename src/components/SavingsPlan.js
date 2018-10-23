import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

import {formatDollarValues} from '../helpers'


const SavingsPlan = () =>  {
        return (
            <div id="SavingsPlan">

                <h1>Savings Plan</h1>

                <h3>
                    You have <strong>{1}</strong> {Number(1) === 1 ? 'source' : 'sources'} of income, so you will want your emergency fund to cover <strong>{6}</strong> months of expenses.
                </h3>
                {' '}<br/>
                <h3> Based on your monthly expenses of <strong>${formatDollarValues(300)}</strong>, your savings goal is <strong>${formatDollarValues(6*300)}</strong>. </h3>
                {' '}<br/>

                <h3> Because you already have <strong>${formatDollarValues(1000)}</strong> saved in your emergency fund, you need to save an additional <strong>${formatDollarValues(1800 - 1000)}</strong> to reach your goal.</h3>
                {' '}<br/>


                <h3> If you save </h3>
                <div className="input-cont">
                        <InputGroup.Addon className="dollar-sign">$</InputGroup.Addon>
                        <FormControl
                            id="monthlySavings"
                            className="dollar-input"
                            defaultValue={formatDollarValues(50)}
                            type="text"
                            maxLength="7"
                            onChange={(e)=>
                                e.target.value = formatDollarValues((e.target.value).replace(",",""))
                            }
                        />
                </div>
                <h3> a.k.a. </h3>
                <div className="input-cont" id="percent-income-cont">
                        <FormControl
                            id="percent-of-income"
                            className="dollar-input"
                            defaultValue={5}
                            type="text"
                            maxLength="3"
                            onChange={(e)=>
                                e.target.value = formatDollarValues((e.target.value).replace(",",""))
                            }
                        />
                        <InputGroup.Addon className="dollar-sign">%</InputGroup.Addon>
                </div>
                <h3> of your income </h3>
                <h3> every month, you will have a fully-funded emergency fund in </h3>

                <h3><strong> {Math.ceil(800/50)} {' '} months.</strong></h3>



            </div>
        )
}

export default SavingsPlan;