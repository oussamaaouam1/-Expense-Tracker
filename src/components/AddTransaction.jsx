import { useContext, useState } from "react"
import { GlobalContext } from "../context/GlobalState";


const AddTransaction = () => {
  const [text ,setText] = useState('');
  const [amount , setAmount] = useState('');


  const {addTransaction} = useContext(GlobalContext);


const onSubmit = e =>{
  e.preventDefault();

  const newTransaction = {
    id:Math.floor(Math.random()*10000000),
    text,
    amount:+amount
  }
  addTransaction(newTransaction)
}

  return (
    <div>
      <h3 className="border-b-2 mt-10 mb-3 m-auto items-center w-72 text-left text-blue-600 font-bold ">Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="text" className=" items-start m-auto w-72 block text-left mb-3">Text</label>
          <input type="text" placeholder="Enter text ..." className="block m-auto items-center w-72 border p-1 drop-shadow-md "
            value={text} onChange={(e)=> setText(e.target.value)}
          />
          <div>
            <label htmlFor="amount" className="m-auto w-72 block text-left mb-3">
              <span className=" text-blue-600 font-bold ">Amount</span> <br />(negative - Expense, positive - income)
            </label>
            <input type="number" placeholder="Enter amount ..." className="block m-auto items-center w-72 border p-1  drop-shadow-md"
            value={amount} onChange={(e)=> setAmount(e.target.value)}
            />
          </div>
          <button className="mt-5 border-2 w-72 p-1 bg-violet-400 drop-shadow-md text-white font-bold hover:bg-inherit hover:text-black">Add transaction</button>

        </div>
      </form>

    </div>
  )
}

export default AddTransaction
