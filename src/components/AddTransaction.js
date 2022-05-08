import React, {useContext, useState} from 'react';
import {GlobelContext} from "../context/GlobelState";

function AddTransaction(){
    //Declaration....
    const [label, setLabel] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobelContext);
    //Methods...
    const handleSubmit = (e)=>{
        e.preventDefault();
        const newTransaction ={
            id:Math.floor(Math.random()*100000),
            label,
            amount: +amount
        }
        addTransaction(newTransaction);
        setLabel('');
        setAmount(0);

    }
    //return our view...
    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Label</label>
                    <input
                        type="text"
                        value={label}
                        onChange={(e)=>setLabel(e.target.value)}
                        placeholder="Enter label.."
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        (<b>-</b>/<b>+</b>)Amount &nbsp; &nbsp; [-expense , +income]
                    </label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e)=>setAmount(e.target.value)}
                        placeholder="Enter amount.."
                    />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    );
}

export default AddTransaction;