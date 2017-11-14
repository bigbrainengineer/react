import React from 'react';

var tasksList = ['task 1', 'task 2'];

class AddNewTask extends React.Component {
	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(event) {
		event.preventDefault();
		let element = event.target.querySelector('input');
		let value = element.value;
		element.value = '';
		this.props.updateList(value);
	}

	render () {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type='text' />
			</form>
		)
	}
}

class ToDoAppList extends React.Component {
	constructor() {
			super();
		}
	render () {
		let items = this.props.tasks.map((task, index) => {
			return <li key={index}>{task}</li>
		})
		return (
			<ul>
				{items}
			</ul>
		)
	}
}

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks : tasksList
		}
		this.updateList = this.updateList.bind(this);
	}

	updateList(text) {
		let updatedTasks = this.state.tasks;
		updatedTasks.push(text);
		this.setState({tasks:updatedTasks})
	}

	render () {
		return (
			<div>
				<h1>ToDo App</h1>
				<AddNewTask updateList={this.updateList} />
				<ToDoAppList tasks={this.state.tasks}/>
			</div>
		)
	}
}


export default App;