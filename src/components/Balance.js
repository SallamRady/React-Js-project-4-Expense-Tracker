import React, {useContext} from 'react';
import {GlobelContext} from "../context/GlobelState";

function Balance(){
    //Declaration...
    let { transactions } = useContext(GlobelContext);
    let amounts = transactions.map(transaction=>transaction.amount);
    /*return the summation of money amount*/
    let total = amounts.reduce((item1,item2)=>(item1+item2),0);
    //methods...
    const moneyFormetter = (number)=>{
        let arr = number.toFixed(2).split(".");
        return (
            " ₹ " +
            arr[0]
                .split("")
                .reverse()
                .reduce(function (acc, number, i) {
                    return number === "-" ? acc : number + (i && !(i % 3) ? "," : "") + acc;
                }, "") +
            "." +
            arr[1]
        );
    }

    //return our view...
    return (
        <>
            <h4>Your Balance</h4>
            <h1>{moneyFormetter(total)}</h1>
        </>
    );
}

export default Balance;