/**
 * This module provide functions to manage the list of
 * to do items.
 */

const todos = [];

//This function adds a new to do items to the list.
export function addTodo(todo) {
    todos.push(todo);
}

//this function returns the list of to do items.
export function getAllTodos() {
    return todos;
}

//this function get to completed to do items.
export function getCompletedTodos() {
    return todos.filter(todo => todo.completed);
}

//this function remove to do items from the todo-list.
export function removeTodo(todoId){
    const index = todos.findIndex(todo => todo.id === todoId);
    if (index > -1) {
        todos.splice(index, 1);
    }   
}