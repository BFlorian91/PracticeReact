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
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(id) {
		this.setState(prevState => {
			const updatedTodos = prevState.todos.map(todo => {
				if (todo.id === id) {
					todo.completed = !todo.completed
				}
				return todo
			})
			return {
				todos: updatedTodos
			}
		})
	}
	render() {
		const todoItems = this.state.todos.map((data) => <TodoItem key={data.id} item={data} handleChange={this.handleChange}/>);

		return (
			<div className="todo-list">
				<h1>TodoList</h1>
				{todoItems}
			</div>
		)
	}
}
