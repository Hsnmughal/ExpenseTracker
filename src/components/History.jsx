import React, { useContext } from "react";
import { HistoryTemplate } from "./HistoryTemp";
import { GlobalContext } from '../context/globalState';

export const History = () => {
    const { transactions } = useContext(GlobalContext);
    return (
        <div className="mainDivs">
            <p className="bal-h bal-subH" style={{ marginBottom: "0.5rem" }}>
                History
            </p>
            {transactions.map(transaction => (
                <HistoryTemplate key={transactions.id} transaction={transaction} />
            ))}
        </div>
    );
}