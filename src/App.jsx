import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { IncomeExpenses } from './components/IncomeExpenses'
import { TransactionList } from './components/TransactionList'
import { Addtransaction } from './components/AddTransaction'
import { TransactionProvider } from './context/Transactioncontext'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [transaction,setTransaction]=useState([])
  const addExpense=(transaction,amount)=>{
    setTransaction((prev)=>[{id:Date.now(), transaction:transaction, amount:amount},...prev])
  }
  const deleteExpense=(id)=>{
    setTransaction((prev)=>prev.filter((prevTransaction)=>prevTransaction.id!=id))
  }
  useEffect(()=>{
    const transaction=JSON.parse(localStorage.getItem("transaction"))
    if(transaction && transaction.length>0){
      setTransaction(transaction)
    }
  },[])
  useEffect(()=>{
    localStorage.setItem("transaction",JSON.stringify(transaction))
  },[])
  
  return (
    <TransactionProvider value={{transaction,addExpense,deleteExpense}}>
     <Header/>
     <div className="container">
      <Balance/>
      <IncomeExpenses/>
      <TransactionList/>
      <Addtransaction/>
     </div>
    </TransactionProvider>
  )
}

export default App
