import React, { useState } from 'react'

export default function StateLifting() {
	const [ todos, setTodos ] = useState([ "Item 1", "Item 2", "Item 3"])

	return (
		<>
			<TodoCount todos={ todos } />
			<TodoList todos={ todos } />
			<AddTodo setTodos={ setTodos } />
		</>
	)
}

function TodoCount({ todos }) {
	return <div>Total Todos: { todos.length } </div>
}

function TodoList({ todos }) {
	return (
		<ul>
			{todos.map((todo) => (
				<li key={ todo }>{ todo }</li>
			)) }
		</ul>
	)
}

function AddTodo({ setTodos }) {
	function handleSubmit(e) {
		e.preventDefault()
		const todo = e.target.elements.todo.value

		console.log(todo)

		setTodos(prevTodos => [ ...prevTodos, todo ])
		e.target.reset();
	}
	return (
		<form onSubmit={ handleSubmit }>
			<input type="text" id="todo" />
			<button type="submit">Add Todo</button>
		</form>
	)
}