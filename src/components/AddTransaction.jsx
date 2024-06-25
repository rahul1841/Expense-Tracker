import React,{useState} from "react";
import { useTransaction } from "../context/Transactioncontext";

export const Addtransaction=()=>{
    const [text,setTransaction]=useState('')
    const [amount,setAmount]=useState('')

    const {addExpense}=useTransaction()

    const onsubmit=(e)=>{
        e.preventDefault();
        if(text.trim()=='' || amount.trim()==''){
            return;
        }
        const transactionamount=+amount
        addExpense(text,transactionamount);
        setTransaction('')
        setAmount('')
    }

    return(
        <>
            <h3>Add new transaction</h3>
            <form >
                <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" 
                value={text}
                onChange={(e)=>setTransaction(e.target.value)}
                placeholder="Enter text..." />
                </div>
                <div className="form-control">
                <label htmlFor="amount">
                    Amount <br />
                    (negative - expense, positive - income)
                </label>
                <input type="number" 
                value={amount}
                onChange={(e)=>setAmount(e.target.value)}
                placeholder="Enter amount..." />
                </div>
                <button className="btn" onClick={onsubmit}>Add transaction</button>
            </form>
        </>
    )
}