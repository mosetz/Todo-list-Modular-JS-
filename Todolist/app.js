/**
 * This is the main entry point for the Todo List application.
 * It create a simple Todo list interface that allows
 * user to add, remove, and mark todos as completed o incomplete.
 */
import {createTodo, markCompleted, markIncomplete} from './todo.js';
import {addTodo, removeTodo, getAllTodos} from './todolist.js'
import {saveTodos, loadTodos} from './storage.js';
import {log, error} from './logger.js';

//DOM elements 
const todoInput = document.getElementById('input');
const addBtn = document.getElementById('submit-btn');
const todoListElement = document.getElementById('todos-list');

function renderTodos() {
    todoListElement.innerHTML = '';

    getAllTodos().forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.text;
        li.style.textDecoration = todo.completed ? 'line-through' : 'none';

        li.addEventListener('click', () => {
            if (todo.completed){
                markCompleted(todo);
            }else {
                markIncomplete(todo);
            }
            saveTodos(getAllTodos());
            renderTodos();
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', e => {
            e.stopPropagation();
            removeTodo(todo.id);
            saveTodos(getAllTodos());
            renderTodos();
            log(`Deleted todo: ${todo.text}`);
        });

        li.appendChild(deleteBtn)
        todoListElement.appendChild(li);
    });
}

function addNewTodo() {
    const text = todoInput.value.trim();
    if (!text){
        error('Empty todo cannot be added');
        return;
    }

    const todo = createTodo(text);
    addTodo(todo);
    saveTodos(getAllTodos());
    renderTodos();
    todoInput.value = '';
}

function createApp() {
    const storedRTodos = loadTodos();
    storedRTodos.forEach(todo => addTodo(todo));
    renderTodos();
    log('App created');
}

addBtn.addEventListener('click', addNewTodo);
todoInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') addNewTodo();
});

createApp();

