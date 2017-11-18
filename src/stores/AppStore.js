import AppDispatcher from '../dispatchers/Dispatcher';
import { EventEmitter } from 'events';


const CHANGE_EVENT = 'change';

class AppStore extends EventEmitter {
    constructor() {
        super();
        this.todos = [
            'todo 1', 'todo 2'
        ];
    }

    handleActions(action) {
        switch (action.type) {
            case 'CREATE_TODO':
                this.createTodo(action.text);
                break;
            case 'REMOVE_TODO':
                this.removeTodo(action.text);
                break;
            default:
        }
    }

    getAll() {
        return this.todos;
    }

    createTodo(text) {
        this.todos.push({
            text : text
        });
    }

    removeTodo(text) {
        let todos = this.getAll();
        todos.splice(todos.indexOf(text), 1);
    }


    handleSubmit(event) {
        event.preventDefault();
        let element = event.target.querySelector('input');
        let value = element.value;
        element.value = '';
        return value;
    }

    updateList(text) {
        let todos = this.getAll();
        todos.push(text);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }
}

const Store = new AppStore();

AppDispatcher.register(Store.handleActions.bind(Store));
window.AppDispatcher = AppDispatcher;


export default Store;
