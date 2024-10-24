import { GlobalContext } from "../context/GlobalState"
import { useContext } from "react"
import { Transaction } from "./Transaction";


const TransactionList = () => {
  
  const { transactions } = useContext(GlobalContext);
  
  return (
    <div>
      <h3 className="border-b-2 mt-10 mb-2 m-auto items-center w-72">History</h3>
    <ul>
      
      {/* {transactions.map(transaction => (<li key={transaction.id} className="border-2 m-auto items-center w-72 h-9 pt-1 drop-shadow-lg ">
        
      {transaction.text} <span className="ml-40">{transaction.amount}</span>
      <button className=" hover:bg-red-600 hover:text-white border  ">X</button>
      </li>))} */}


      {transactions.map(transaction => (<Transaction key={transaction.id} transaction = {transaction}/>))}

      
    </ul>
    </div>
  )
}

export default TransactionList
