// import { GlobalContext } from "../context/GlobalState"
import PropTypes from "prop-types";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({transaction}) => {
  const sign = transaction.amount<0 ?'-' : '+'
  const borderColor = transaction.amount < 0 ? 'border-red-500 bg-red-100' : 'border-green-500 bg-green-100'; // Dynamic border color

  const { deleteTransaction } = useContext(GlobalContext);

  return (

      <li key={transaction.id} className={`relative border-2 m-auto flex items-center justify-between w-72 h-9 pt-1 drop-shadow-lg hover:bg-gray-100 my-2 bg-gree
        ${borderColor} 
      `}>
    <button className="absolute -left-8 hover:bg-red-600 hover:text-white border px-2 group-hover:inline-block mb-1"
    onClick={()=> deleteTransaction(transaction.id)}
    >X</button>
    <span className="ml-10 pb-1">{transaction.text}</span> 
    <span className="mr-4 pb-1">{sign}${Math.abs(transaction.amount)}</span>
  </li>

  )
}

// PropTypes validation
Transaction.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.number.isRequired,   // Ensure the id is a number
    text: PropTypes.string.isRequired, // Ensure text is a string
    amount: PropTypes.number.isRequired, // Ensure amount is a number
  }).isRequired
};
