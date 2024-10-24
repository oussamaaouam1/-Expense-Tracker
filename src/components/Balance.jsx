import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

const Balance = () => {
  const {transactions} = useContext(GlobalContext)

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc,item)=> (acc+=item),0).toFixed(2)
  return (
    <div>
      <h4 className="font-bold">YOUR BALANCE</h4>
      <h1 className="font-bold text-2xl text-red-600">{total}$</h1>
    </div>
  )
}

export default Balance
