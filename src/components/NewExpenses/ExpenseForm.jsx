import { useState, useEffect } from 'react'
import './ExpenseForm.css'

function ExpenseForm(props) {
	const [title, setTitle] = useState('')
	const [amount, setAmount] = useState('')
	const [date, setDate] = useState('')


	

	// способ 1
	const inputChangeHandler = (event) => {   //бут inputtar ушул функцияга уланат, ал учун бут инпутка ат берилет
		const currentInput = event.target.name 
		//эгерде name title, amount, date барабар болсо, значениясын кайтарып берет

		if (currentInput === 'title') {
			setTitle(event.target.value)
		}else if (currentInput === 'amount') {
			setAmount(event.target.value)
		}else if (currentInput === 'date') {
			setDate(event.target.value)
		}
	}

	const submitHandler = (event) => {
		event.preventDefault()
		const currentData = {
			title,
			amount,
			date: new Date(date)
		}
		props.onSaveExpenseData(currentData)

	// 	useEffect(() =>{
	// 	inputChangeHandler
	//   },[inputChangeHandler])
	}
	return (
		<form onSubmit={submitHandler}> 
		{/* submitHandlerдин ичиндеги событиялар submitti басмайынча иштебей турат  */}
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input
						onChange={inputChangeHandler}
						type='text'
						name='title'
						value={title} //двусторонная привязка. ExpenseForm дун ичиндеги titleга кирет
					/>
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						onChange={inputChangeHandler}
						type='number'
						name='amount'
						min='0.1'
						step='1'
						value={amount} //двусторонная привязка. ExpenseForm дун ичиндеги amount кирет
					/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						onChange={inputChangeHandler}
						type='date'
						name='date'
						min='2023-01-01'
						value={date} //двусторонная привязка. ExpenseForm дун ичиндеги dateга кирет
					/>
				</div>
				<div className='new-expense__actions'>
					<button type='submit'>Add Expense</button>
				</div>
			</div>
		</form>
	)
}

export default ExpenseForm


// import { useState } from 'react'
// import './ExpenseForm.css'

// function ExpenseForm(props) {
// 	const [title, setTitle] = useState('')
// 	const [amount, setAmount] = useState('')
// 	const [date, setDate] = useState('')

// 	// способ 1
// 	const inputChangeHandler = (event) => {   //бут inputtar ушул функцияга уланат, ал учун бут инпутка ат берилет
// 		const currentInput = event.target.name 
// 		//эгерде name title, amount, date барабар болсо, значениясын кайтарып берет

// 		if (currentInput === 'title') {
// 			setTitle(event.target.value)
// 		}else if (currentInput === 'amount') {
// 			setAmount(event.target.value)
// 		}else if (currentInput === 'date') {
// 			setDate(event.target.value)
// 		}
// 	}

// 	const submitHandler = (event) => {
// 		event.preventDefault()
// 		const currentData = {
// 			title,
// 			amount,
// 			date: new Date(date)
// 		}
// 		props.onSaveExpenseData(currentData)
// 	}
// 	return (
// 		<form onSubmit={submitHandler}> 
// 		{/* submitHandlerдин ичиндеги событиялар submitti басмайынча иштебей турат  */}
// 			<div className='new-expense__controls'>
// 				<div className='new-expense__control'>
// 					<label>Title</label>
// 					<input
// 						onChange={inputChangeHandler}
// 						type='text'
// 						name='title'
// 						value={title} //двусторонная привязка. ExpenseForm дун ичиндеги titleга кирет
// 					/>
// 				</div>
// 				<div className='new-expense__control'>
// 					<label>Amount</label>
// 					<input
// 						onChange={inputChangeHandler}
// 						type='number'
// 						name='amount'
// 						min='0.1'
// 						step='1'
// 						value={amount} //двусторонная привязка. ExpenseForm дун ичиндеги amount кирет
// 					/>
// 				</div>
// 				<div className='new-expense__control'>
// 					<label>Date</label>
// 					<input
// 						onChange={inputChangeHandler}
// 						type='date'
// 						name='date'
// 						min='2023-01-01'
// 						value={date} //двусторонная привязка. ExpenseForm дун ичиндеги dateга кирет
// 					/>
// 				</div>
// 				<div className='new-expense__actions'>
// 					<button type='submit'>Add Expense</button>
// 				</div>
// 			</div>
// 		</form>
// 	)
// }

// export default ExpenseForm


