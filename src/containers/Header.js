import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import TodoItemInput from '../components/TodoItemInput'
import { addTodo } from '../actions'

export const Header = ({ action }) => (
    <header className="header">
        <h1>todos</h1>
        <TodoItemInput
            newTodo
            onSave={(description) => {
                if (description.length !== 0) {
                    addTodo(description)
                }
            }}
            placeholder="What needs to be done?"
        />
    </header>
)

Header.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default connect(null, { addTodo })(Header)