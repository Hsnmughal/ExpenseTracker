import React, { useContext, useState } from "react";
import { GlobalContext } from '../context/globalState';

export const NewTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);
    const onSubmit= (e) =>{
        e.preventDefault();
        const newTransaction = {
            id : Math.floor(Math.random() * 100000000),
            text,
            amount : +amount
        }
        addTransaction(newTransaction);
        const reset = ()=> {setText('');setAmount(0)}
        reset();
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div style={{ marginBottom: "0.5rem" }}>
                    <p className="bal-h bal-subH" style={{ marginBottom: "0.25rem" }}>
                        Add New Transaction
                    </p>
                    <p className="bal-h" style={{ marginBottom: "0.25rem" }}>
                        Text
                    </p>
                    <input style={{ marginBottom: "0.25rem" }} type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Text..." className="item" />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                    <p className="bal-h" style={{ marginBottom: "0.25rem" }}>
                        Amount
                    </p>
                    <p className="bal-h bal-hsub" style={{ marginBottom: "0.25rem" }}>
                        (negative-expense,positive-income)
                    </p>
                    <input style={{ marginBottom: "0.25rem" }} type="number" value={amount} placeholder="Enter Amount..." onChange={(e) => setAmount(e.target.value)} className="item" />
                </div>
                <div>
                    <input type="submit" className="addTrans-btn" value="Add Transaction" />
                </div>
            </form>
        </div>
    );
}
