//This module provides function to create and manage to do items.
export function createTodo(text){
    return {
        id: Date.now(),
        text,
        completed: false
    };
}

export function markCompleted(todo){
    todo.completed = true;
}

export function markIncomplete(todo){
    todo.completed = false;
}