import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalState';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const expense = amounts
        .filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0) * -1
            .toFixed(2);
    return (
        <div className="mainDivs">
            <div style={{ marginBottom: "0.5rem" }}>
                <p className="bal-h" style={{ marginBottom: "0.25rem" }}>
                    CURRENT BALANCE
                </p>
                <p className="bal-c" style={{ marginBottom: "0.25rem" }}>
                    ${total}
                </p>
            </div>
            <div className="income-expense">
                <div id='f' style={{ marginBottom: "0.25rem" }}>
                    <p>
                        INCOME
                    </p>
                    <p id='fi'>
                        +$ {income}
                    </p>
                </div>
                <div id='s' style={{ marginBottom: "0.25rem" }}>
                    <p>
                        EXPENSE
                    </p>
                    <p id='se'>
                        -$ {expense}
                    </p>
                </div>
            </div>
        </div>
    )
}