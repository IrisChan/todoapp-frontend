import { combineReducers } from 'redux'
import {
    TodoListReducer
} from './todos'

const rootReducer = combineReducers({
    todos: TodoListReducer
})

export default rootReducer