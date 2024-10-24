import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"



const IncomeExpenses = () => {
const {transactions} = useContext(GlobalContext)

const amounts = transactions.map(transaction=> transaction.amount);
const income = amounts //income calculation
.filter(item => item > 0)
.reduce((acc,item)=> (acc+item),0)
.toFixed(2);

const expense = amounts //expense calculation
.filter(item => item < 0)
.reduce((acc,item)=> (acc+item),0)
.toFixed(2);

  return (
    <div className="border flex w-72 items-center justify-center m-auto mt-10 py-5 drop-shadow-lg">
      <div className="w-auto m-auto" >
        <h4>INCOME</h4>
        <p className="text-green-600 font-bold">${income}</p>
      </div>
      <div className="h-10 border-l-2 mx-4"></div>  {/* Separator line */}

      <div className="w-auto m-auto">
        <h4>EXPENSE</h4>
        <p className="text-red-600 font-bold">${expense}</p>
      </div>
    </div>
  )
}
export default IncomeExpenses
