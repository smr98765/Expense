import ExpenseForm from "./ExpenseForm"
import './NewExpenses.css'

function NewExpenses(props) {
    const saveExpenseData = (expenseData) => { //поднятие состояние. 
        const dataWithId = {
            ...expenseData,
            id: Math.random().toString() //айди кошулду
        }

        props.onAddExpense(dataWithId)
    }

    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseData}/>
        </div>
    )
}

export default NewExpenses