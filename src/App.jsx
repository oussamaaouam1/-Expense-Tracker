import './App.css'
import AddTransaction from './components/AddTransaction'
import Balance from './components/Balance'
import Header from './components/Header'
import IncomeExpenses from './components/incomeExpenses'
import TransactionList from './components/TransactionList'
import { GlobalProvider } from './context/GlobalState'


function App() {


  return (
    <div>
      <GlobalProvider>

        <Header />
        <Balance />
        <IncomeExpenses /> 
        <TransactionList />
        <AddTransaction />
      </GlobalProvider>
    </div>
  )
}

export default App
