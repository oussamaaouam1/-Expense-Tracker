import {  createContext , useReducer } from "react";
import AppReducer from './AppReducer';

//create an initial state
const InitialState = {
  transactions :[
    {id: 2, text :'Salary', amount: 300},
    {id: 1, text :'Flower', amount: -20},
    {id: 3, text :'Book', amount: -10},
    {id: 4, text :'Camera', amount: -150}
  ]
}


//create global context

export const GlobalContext = createContext(InitialState);

// eslint-disable-next-line react/prop-types
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, InitialState);

  //delete transaction fun

  function deleteTransaction(id) {
    dispatch(
      {
        type:'DELETE_TRANSACTION',
        payload:id
      }
    );
  }

  function addTransaction(transaction) {
    dispatch(
      {
        type:'ADD_TRANSACTION',
        payload:transaction
      }
    );
  }
  
  return(
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction
    }}>
      {children}
    </GlobalContext.Provider>
  );
}