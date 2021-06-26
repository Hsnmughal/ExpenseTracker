import React, { useContext } from "react";
import CloseIcon from '@material-ui/icons/Close';
import { GlobalContext } from '../context/globalState';

export const HistoryTemplate = ({ transaction }) => {
    const sign = transaction.amount > 0 ? '+' : '-';
    const { deleteTransaction } = useContext(GlobalContext);
    return (
        <div style={{ marginBottom: "0.25rem" }}>
            <div className="hoverCross">
                <button onClick={() => deleteTransaction(transaction.id)} className="closeIconBtn"><CloseIcon className="hisTempIcon" /></button>
                <div style={{
                    borderRight: `3px solid ${(sign==='+') ? 'green' : 'red'}`,
                    boxShadow: '0px 2px 3px grey',
                    padding: '5px'
                }}>
                    <p className='hist-c' >
                        {transaction.text}
                        <span style={{ margin: 0 }}>
                        {sign}${Math.abs(transaction.amount)}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}