import React from 'react'

import './App.css'

import { Provider } from 'react-redux'
import { Routes } from './Routes'
import { configureStore } from './store/configureStore'
import * as TodoActions from './actions'

const store = configureStore()

// At first dispatch a Get Todos Actions, so we'll receive the todos
// fetched from the server at the start of the app
store.dispatch(TodoActions.GetTodos())

const App = (props) => {
    return (
        <Provider store={store} >
            <Routes />
        </Provider>
    )
}
export default App;