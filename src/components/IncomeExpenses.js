import React, {useContext} from 'react';
import {GlobelContext} from "../context/GlobelState";

function IncomeExpenses(){
    //Declaration...
    let {transactions} = useContext(GlobelContext);
    let amounts = transactions.map(
        transaction => transaction.amount
    )
    let income = amounts.filter(amount=>amount>0).reduce((item1,item2)=>(item1+item2),0);
    let expense = amounts.filter(amount=>amount<0).reduce((item1,item2)=>(item1+item2),0) * -1;
    //Methods...
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

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">{moneyFormetter(income)}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">{moneyFormetter(expense)}</p>
            </div>
        </div>
    );
}

export default IncomeExpenses;