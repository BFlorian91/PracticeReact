import React, { Component } from 'react';
import TodoItem from './todo';

export default class App extends Component {
	render() {
		return (
			<div className="todo-list">
				<h1>TodoList</h1>		I
				<TodoItem />				
				<TodoItem />				
				<TodoItem />				
				<TodoItem />				
			</div>
		)
	}
}
