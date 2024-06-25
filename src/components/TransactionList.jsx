import React from "react";
import { useTransaction } from "../context/Transactioncontext";


export const TransactionList=()=>{
    const {transaction,deleteExpense}=useTransaction()
    return(
        <>
            <h3>History</h3>
            <ul  className="list">
            {transaction.map((transaction)=>(
                <li key={transaction.id}className={transaction.amount<0?'minus':'plus'}>
                {transaction.text} <span>{transaction.amount<0?'-':'+'}${Math.abs(transaction.amount)}</span>
                <button className="delete-btn"
                onClick={()=>deleteExpense(transaction.id)}
                >x</button>
            </li>
            ))} 
      </ul>
        </>
    )
}