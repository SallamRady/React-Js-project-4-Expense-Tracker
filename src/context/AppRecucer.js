export default (state,action)=>{
    switch (action.type) {
        case 'ADD_TRANSACTION':
            // console.log(state.transactions,action.payload)
            return {...state,transactions:[action.payload,...state.transactions]}

        case 'DELETE_TRANSACTION':
            return {...state,transactions:state.transactions.filter(
                transact=>transact.id !== action.payload
                )}

        default:
            return state;

    }
}