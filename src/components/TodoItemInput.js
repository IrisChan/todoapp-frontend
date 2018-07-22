import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class TodoItemInput extends Component {
    static propTypes = {
        onSave: PropTypes.func.isRequired,
        owner: PropTypes.string,
        description: PropTypes.string,
        placeholder: PropTypes.string,
        editing: PropTypes.bool,
        newTodo: PropTypes.bool
    }

    state = {
        description: this.props.description || '',
        owner: 'iris'
    }

    handleSubmit = (e) => {
        const description = e.target.value.trim()
        if (e.which === 13) {
            this.props.onSave(description)
            if (this.props.newTodo) {
                this.setState({
                    description: '',
                    owner: 'iris'
                })
            }
        }
    }

    handleChange = (e) => {
        this.setState({
            description: e.target.value,
            owner: 'iris'
        })
    }

    handleBlur = (e) => {
        if (!this.props.newTodo) {
            this.props.onSave(e.target.value)
        }
    }

    render() {
        return (
            <input className={
                classnames({
                    edit: this.props.editing,
                    'new-todo': this.props.newTodo
                })}
            type="text"
            placeholder={this.props.placeholder}
            autoFocus="true"
            value={this.state.description}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            onKeyDown={this.handleSubmit} />
        )
    }
}