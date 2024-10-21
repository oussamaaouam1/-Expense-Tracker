const IncomeExpenses = () => {
  return (
    <div className="border flex w-72 items-center justify-center m-auto mt-10 py-5 drop-shadow-lg">
      <div className="w-auto m-auto" >
        <h4>INCOME</h4>
        <p className="text-green-600 font-bold">+$0.00</p>
      </div>
      <div className="h-10 border-l-2 mx-4"></div>  {/* Separator line */}

      <div className="w-auto m-auto">
        <h4>EXPENSE</h4>
        <p className="text-red-600 font-bold">-$0.00</p>
      </div>
    </div>
  )
}
export default IncomeExpenses
