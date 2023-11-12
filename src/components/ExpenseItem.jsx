import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props) { //App jsтеги обьект props аркылуу ExpIt келди
	const expenseTitle = props.title 
	const expenseAmount = props.amount

	return (
		<div className='expense-item'>
			<ExpenseDate /> 
			<h2 className='expense-item__description'>{expenseTitle}</h2> 
			{/* жаны ат берилген */}
            <p className='expense-item__price'>${expenseAmount}</p> 
		</div>
	)
}
export default ExpenseItem
