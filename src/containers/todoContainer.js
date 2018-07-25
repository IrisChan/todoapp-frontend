import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Button } from 'semantic-ui-react';
import * as TodoActions from '../actions';
import TodoTable from '../components/todoTable';
import EditTodo from '../components/editTodo';

export class TodoContainer extends Component {
    createTodo = (todo) => {
        this.props.actions.CreateTodo(todo)
    }

    startEditing = (id) => {
        this.props.actions.StartEditing(id)
    }

    cancelEditing = (id) => {
        this.props.actions.CancelEditing(id)
    }

    editTodo = (todo) => {
        this.props.actions.UpdateTodo(todo)
    }

    completeTodo = (todo) => {
        this.props.actions.UpdateTodo({ ...todo, done: true })
    }

    deleteTodo = (todo) => {
        this.props.actions.DeleteTodo(todo)
    }

    toggleShowCompleted = () => {
        this.props.actions.ToggleShowCompleted(this.props.showCompleted)
    }

    render() {
        return (
            <div className="todo-container">
                <TodoTable
                    todos={this.props.todos}
                    createTodo={this.createTodo}
                    startEditing={this.startEditing}
                    cancelEditing={this.cancelEditing}
                    editTodo={this.editTodo}
                    completeTodo={this.completeTodo}
                    deleteTodo={this.deleteTodo}
                />

                <EditTodo createTodo={this.createTodo} />
            </div>
        )
    }
}

TodoContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    todos: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps) {
    return {
        todos: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TodoActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);