import { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'
import ExpensesFilter from './ExpensesFilter'

const ExpensesList = (props) =>{

	let expenseContent=(
				<p style={{textAlign: 'center', color: 'white'}}>
				No Expense Found
				</p>
			)
			console.log(props.expenses);
		if(props.expenses.length > 0){
			expenseContent = props.expenses.map((element,index,array) =>{
				return (
					<ExpenseItem
					key={element.id}
					title={element.title}
					amount={element.amount}
					date={element.date}
					/>
				)
			})
		}else if(props.filteredYear === 'All'){
			expenseContent = props.items.map((element,index,array) =>{
				return (
					<ExpenseItem
					key={element.id}
					title={element.title}
					amount={element.amount}
					date={element.date}
					/>
				)
			})
		}
		return(
			<div>
				{expenseContent}
			</div>
			
		)

	}
export default ExpensesList