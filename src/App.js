import { useEffect, useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses.jsx';
import NewExpenses from './components/NewExpenses/NewExpenses';

const initState = [  //массивдин ичиндеги 3 обьект
    // {
    //   id: 'e1',
    //   title: 'Car tools',
    //   amount: 200,  //сумма
    //   date: new Date(2023, 5, 14)
    // },
    // {
    //   id: 'e2',
    //   title: 'Toys',
    //   amount: 40,
    //   date: new Date(2022, 4, 8)
    // },
    // {
    //   id: 'e3',
    //   title: 'Papers',
    //   amount: 100,
    //   date: new Date(2024, 11, 19)
    // },
  ]
function App() {
  const [expenses, setExpenses] = useState(initState)

 

  const addExpenseDataHandler = (expense) => {
    setExpenses((prevState) => {
      return[expense, ...prevState]
    })
  }
  return (
    <div className="App">
      <NewExpenses onAddExpense={addExpenseDataHandler}/>
      <Expenses items={expenses}/> 
      {/* expensesтин атын itemsге озгорду */}
    </div>
  );
}

export default App;


// import { useState } from 'react';
// import './App.css';
// import Expenses from './components/Expenses/Expenses.jsx';
// import NewExpenses from './components/NewExpenses/NewExpenses';

// const initState = [  //массивдин ичиндеги 3 обьект
//     {
//       id: 'e1',
//       title: 'Car tools',
//       amount: 200,  //сумма
//       date: new Date(2023, 5, 14)
//     },
//     {
//       id: 'e2',
//       title: 'Toys',
//       amount: 40,
//       date: new Date(2022, 4, 8)
//     },
//     {
//       id: 'e3',
//       title: 'Papers',
//       amount: 100,
//       date: new Date(2024, 11, 19)
//     },
//   ]
// function App() {
//   const [expenses, setExpenses] = useState(initState)

//   const addExpenseDataHandler = (expense) => {
//     setExpenses((prevState) => {
//       return[expense, ...prevState]
//     })
//   }
//   return (
//     <div className="App">
//       <NewExpenses onAddExpense={addExpenseDataHandler}/>
//       <Expenses items={expenses}/> 
//       {/* expensesтин атын itemsге озгорду */}
//     </div>
//   );
// }

// export default App;
