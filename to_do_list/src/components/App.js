import React from 'react';

/* Component */
import TodoItem from './todo';

/* Data */
import todoData from '../todoData';


export default function App() {
	const todoItem = todoData.map((data) => <TodoItem key={data.id} item={data}/>)

	return (
		<div className="todo-list">
			<h1>TodoList</h1>		I
			{todoItem}
		</div>
		)
}
