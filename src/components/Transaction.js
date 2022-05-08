import {useContext} from "react";
import {GlobelContext} from "../context/GlobelState";

function Transaction({ transaction }){
    //Declaration...
    const sign = transaction.amount < 0 ? "-" : "+";
    const {deleteTransaction} = useContext(GlobelContext);

    //Methods......
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
        <li className={transaction.amount < 0 ? "minus" : "plus"}>
            {transaction.label}
            <span>{sign}{moneyFormetter(transaction.amount)}</span>
            <button
                className="delete-btn"
                onClick={()=>deleteTransaction(transaction.id)}
            >x</button>
        </li>
    );
}

export default Transaction;