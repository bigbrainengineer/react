import AppDispatcher from '../dispatchers/Dispatcher';
import TodoConstants from '../consts/Constants';



export function addTodo(todo) {
    AppDispatcher.dispatch({
        type: TodoConstants.CREATE_TODO,
        text: todo
    });
}

export function removeTodo(todo) {
    AppDispatcher.dispatch({
        type: TodoConstants.REMOVE_TODO,
        text: todo
    });
}
