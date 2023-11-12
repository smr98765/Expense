import { useState } from 'react' //returnдун ичине озгоруу киргизет
import Card from '../../UI/Card'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpenseChart from './ExpenseChart'

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState('2022') // 2022 деп чыгып турат 
	const filteredChangHandler = (selectYear) => { //optionдун уйу	
		setFilteredYear(selectYear) //selectorYearга жазылган жыл чыгат
	}
	const filteredExpense = props.items.filter(expense =>{
		return expense.date.getFullYear().toString() === filteredYear
	})
// 	let expenseContent=(
// 		<p style={{textAlign: 'center', color: 'white'}}>
// 		No Expense Found
// 		</p>
// 	)
// if(filteredExpense.length > 0){
// 	expenseContent = filteredExpense.map((element,index,array) =>{
// 		return (
// 			<ExpenseItem
// 			key={element.id}
// 			title={element.title}
// 			amount={element.amount}
// 			date={element.date}
// 			/>
// 		)
// 	})
// }else if(filteredYear === 'All'){
// 	expenseContent = props.items.map((element,index,array) =>{
// 		return (
// 			<ExpenseItem
// 			key={element.id}
// 			title={element.title}
// 			amount={element.amount}
// 			date={element.date}
// 			/>
// 		)
// 	})
// }

	return (
		<Card className='expenses'>
			
			<ExpensesFilter
			selected={filteredYear}
			onChangeFilter={filteredChangHandler}
			/>
		<ExpenseChart expenses={filteredExpense}/>	
		<ExpensesList items={props.items} filteredYear={filteredYear} expenses={filteredExpense}/>

		</Card>
	)
}

export default Expenses
