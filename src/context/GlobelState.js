import {createContext, useReducer} from "react";
import AppRecucer from "./AppRecucer";

//initial state
const initialState = {
    transactions: []
}
export const GlobelContext = createContext(initialState);

export const GlobalProvider = ({children})=>{
    const [state,dispatch] = useReducer(AppRecucer,initialState);

    //actions
    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        });
    }
    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        });
    }

    return (
        <GlobelContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobelContext.Provider>
    );
}
