import * as ActionTypes from '../constants/ActionTypes';
import { TodoApi } from '../api/todoApi';

// Create
export function CreateTodoSuccess(todo) {
    return {
        type: ActionTypes.CREATE_TODO_SUCCESS,
        todo
    }
}

export function CreateTodo(todo) {
    return (dispatch, getState) => {
        return TodoApi.createTodo(todo).then((res) => {
            dispatch(CreateTodoSuccess(res.data))
        })
    }
}

// Read
export function GetTodoSuccess(todos) {
    return {
        type: ActionTypes.GET_TODOS_SUCCESS,
        todos
    }
}

export function GetTodos() {
    return (dispatch, getState) => {
        return TodoApi.getTodos().then((res) => {
            dispatch(GetTodoSuccess(res))
        })
    }
}

// Update
export function StartEditing(id) {
    return {
        type: ActionTypes.START_EDITING,
        id
    }
}

export function CancelEditing(id) {
    return {
        type: ActionTypes.CANCEL_EDITING,
        id
    }
}

export function UpdateTodoSuccess(todo) {
    return {
        type: ActionTypes.UPDATE_TODO_SUCCESS,
        todo,
        id: todo.id
    }
}

export function UpdateTodo(todo) {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.UPDATE_TODO,
            todo
        })

        TodoApi.updateTodo(todo).then((res) => {
            dispatch(UpdateTodoSuccess(res.data))
        })
    }
}

// Delete
export function DeleteTodoSuccess(todo) {
    return {
        type: ActionTypes.DELETE_TODO_SUCCESS,
        todo,
        id: todo.id
    }
}

export function DeleteTodo(todo) {
    return (dispatch, getState) => {
        dispatch({
            type: ActionTypes.DELETE_TODO,
            todo
        })
        TodoApi.deleteTodo(todo).then((res) => {
            if (res.status === 204) {
                dispatch(DeleteTodoSuccess(todo))
            }
        })
    }
}