import { HttpClient } from './httpClient'

const API = 'http://localhost:8080'

const TODO_API = `${API}/todoitems`

const axiosConfig = {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
}

const createTodo = (todo) => {
    return HttpClient.post(TODO_API, todo)
}

const getTodos = () => {
    return HttpClient.get(TODO_API)
}

const updateTodo = (todo) => {
    return HttpClient.put(`${TODO_API}/${todo.id}`, todo, axiosConfig)
}

const deleteTodo = (todo) => {
    return HttpClient.delete(`${TODO_API}/${todo.id}`, axiosConfig)
}

const TodoApi = {
    createTodo,
    getTodos,
    updateTodo,
    deleteTodo
}

export { TodoApi }