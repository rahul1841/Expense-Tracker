import { createContext,useContext } from "react";

export const TransactionContext=createContext({
    transaction: [{
        id: 1,
        text: 'flower',
        amount: 20
    }],
    addExpense: (transaction,amount)=>{},
    deleteExpense: (id)=>{}
})

export const useTransaction=()=>{
    return useContext(TransactionContext)
}
export const TransactionProvider=TransactionContext.Provider