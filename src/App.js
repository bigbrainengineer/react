import React from 'react';
import AppStore from './stores/AppStore';
import * as TodoActions from './actions/TodoActions';

class AddNewTask extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
    	let value = AppStore.handleSubmit(event);
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
        this.remove = this.remove.bind(this);
    }

    remove(element) {
        let text = element.target.parentNode.querySelector('span').innerText;
        this.props.remove('text');
    }

    render () {
        let items = this.props.tasks.map((task, index) => {
            return <li key={index}><span>{task}</span><button onClick={this.remove}>X</button></li>
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
            tasks : AppStore.getAll(),
        }
        this.updateList = this.updateList.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    updateList(text) {
        TodoActions.updateList(text);
        let updatedTasks = AppStore.getAll();
        this.setState({tasks:updatedTasks});
    }

    removeTodo(text) {
        TodoActions.removeTodo(text);
        let updatedTasks = AppStore.getAll();
        this.setState({tasks:updatedTasks})
    }

    render () {
        return (
			<div>
				<h1>ToDo App</h1>
				<AddNewTask updateList={this.updateList} />
				<ToDoAppList tasks={this.state.tasks} remove={this.removeTodo}/>
			</div>
        )
    }
}


export default App;