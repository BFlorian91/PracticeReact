import React, { Component } from 'react';

/* Component */
import TodoItem from './todo';

/* Data */
import todoData from '../todoData';


export default class App extends Component {

	constructor() {
		super()
		this.state = {
			todos: todoData
		}
	}

	render() {
		const todoItems = this.state.todos.map((data) => <TodoItem key={data.id} item={data}/>);
			
		return (
			<div className="todo-list">
				<h1>TodoList</h1>
				{todoItems}
			</div>
		)
	}
}
