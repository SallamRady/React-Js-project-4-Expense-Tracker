import React, {useContext} from 'react';
import {GlobelContext} from "../context/GlobelState";
import Transaction from "./Transaction";

function TransactionList(){
    const {transactions} = useContext(GlobelContext);
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
            </ul>
        </>
    );
}

export default TransactionList;