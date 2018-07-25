import React, { Component } from 'react';

import {
    Button,
    Table,
    Input
} from 'semantic-ui-react';

import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

const EditOptions = (props) => {
    return (
        <Table.Cell>
            <Button color='green' onClick={props.editTodo}>
                Edit
            </Button>
            <Button color='blue' onClick={props.cancelEdit}>
                Cancel
            </Button>
        </Table.Cell>
    )
}

const AddOptions = (props) => {
    return (
        <Table.Cell>
            <Button color='green' onClick={props.createTodo}>
                Create
            </Button>
            < Button color='blue' onClick={props.emptyTodo}>
                Reset
            </Button>
        </Table.Cell>
    )
}

const Options = (props) => {
    if (props.todo && props.todo.editing) {
        return EditOptions(props);
    }

    return AddOptions(props);
}

class EditTodo extends Component {
    constructor(props) {
        super(props);

        if (this.props.todo) {
            this.state = {
                ...this.props.todo
            }
        } else {
            this.state = {
                ...this.emptyTodo()
            }
        }
    }

    emptyTodo = () => {
        return {
            title: '',
            description: '',
            targetDate: moment()
        }
    }

    resetTodo = () => {
        this.setState({
            title: '',
            description: '',
            targetDate: moment()
        })
    }

    changeNewTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    changeNewDescription = (event) => {
        this.setState({
            description: event.target.value
        })
    }

    changeNewDate = (event) => {
        this.setState({
            date: moment(event)
        })
    }

    createTodo = (event) => {
        this.resetTodo()
        this.props.createTodo(this.state)
    }

    editTodo = (event) => {
        this.props.editTodo(this.state)
    }

    cancelEditing = () => {
        this.props.cancelEditing()
    }

    getDateForDatePicker() {
        return moment(this.state.targetDate)
    }

    render() {
        return (
            <Table.Row>
                <Table.Cell>
                    <Input
                        placeholder='Title'
                        value={this.state.title}
                        onChange={this.changeNewTitle}/>
                </Table.Cell>

                <Table.Cell>
                    <Input
                        placeholder="Descritpion"
                        value={this.state.description}
                        onChange={this.changeNewDescription}/>
                </Table.Cell>

                <Table.Cell>
                    <DatePicker
                        onSelect={this.getDateForDatePicker}
                        onChange={this.changeNewDate}/>
                </Table.Cell>

                <Options
                    todo={this.props.todo}
                    editTodo={this.editTodo}
                    createTodo={this.createTodo}
                    resetTodo={this.resetTodo}
                    cancelEdit={this.cancelEditing}
                />

            </Table.Row>
        )
    }
}

export default EditTodo;