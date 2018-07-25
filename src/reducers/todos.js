import * as ActionTypes from '../constants/ActionTypes'

const todo = (state, action) => {
    if (state.id !== (action.id || action.todo.id)) {
        return state;
    }

    switch (action.type) {
    case ActionTypes.START_EDITING:
    {
        return {
            ...state,
            editing: true
        }
    }

    case ActionTypes.CANCEL_EDITING:
    {
        return {
            ...state,
            editing: false
        }
    }

    case ActionTypes.UPDATE_TODO:
    {
        return {
            ...state,
            editing: false,
            updating: true
        }
    }

    case ActionTypes.UPDATE_TODO_SUCCESS:
    {
        return {
            ...state,
            ...action.todo,
            updating: false
        }
    }

    case ActionTypes.DELETE_TODO:
    {
        return {
            ...state,
            deleting: true
        }
    }

    case ActionTypes.DELETE_TODO_SUCCESS:
    {
        return false
    }

    default:
    {
        return state
    }
    }
}

export function TodoListReducer(state = [], action) {
    switch (action.type) {
    case ActionTypes.CREATE_TODO_SUCCESS: {
        return [
            ...state,
            action.todo
        ];
    }

    case ActionTypes.GET_TODOS_SUCCESS: {
        if (action.todos.data === undefined || action.todos.data.length === 0) {
            return state
        }

        return (
            action.todos.data.map((todoitem) => {
                return {
                    ...todoitem,
                    editing: false
                }
            })
        )
    }

    case ActionTypes.START_EDITING: {
        return state.map((s) => {
            return todo(s, action)
        })
    }

    case ActionTypes.CANCEL_EDITING: {
        return state.map((s) => {
            return todo(s, action)
        })
    }

    case ActionTypes.UPDATE_TODO: {
        return state.map((s) => {
            return todo(s, action)
        })
    }

    case ActionTypes.UPDATE_TODO_SUCCESS: {
        return state.map((s) => {
            return todo(s, action)
        })
    }

    case ActionTypes.DELETE_TODO: {
        return state.map((s) => {
            return todo(s, action)
        })
    }

    case ActionTypes.DELETE_TODO_SUCCESS: {
        return state.filter((s) => {
            return todo(s, action)
        })
    }

    default:
        return state
    }
}