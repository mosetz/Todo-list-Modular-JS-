/**
 * This module provides functions to manage 
 * the storage of to do items locally.
 * It uses the browser's Local Storage
 */
const STORAGE_KEY = 'todos';

export function saveTodos(todos){
    try{
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch(e){
        console.error(`Fail to save todos`, e);
    }
}

export function loadTodos(){
    try {
       const data = localStorage.getItem(STORAGE_KEY);
       return data ? JSON.parse(data) : [];
    } catch(e){
        console.error(`Fail to load todos`, e);
        return [];
    }
}

