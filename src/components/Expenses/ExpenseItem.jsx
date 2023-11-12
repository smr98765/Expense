import './ExpenseItem.css'
import { useState } from 'react' //returnдун ичине озгоруу киргизет
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props) {
	const expenseAmount = props.amount
	const expenseTitle = props.title

	return (
		<div className='expense-item'>
			<ExpenseDate date={props.date} />
			<h2 className='expense-item__description'>{expenseTitle}</h2>
			<p className='expense-item__price'>${expenseAmount}</p>
		</div>
	)
}
export default ExpenseItem
