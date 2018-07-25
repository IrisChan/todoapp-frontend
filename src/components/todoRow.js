import React from 'react';
import { Button, Table } from 'semantic-ui-react';

const getClassName = (props) => {
    return `

    ${props.todo.updating
        ? 'updating'
        : ''}
    
    ${props.todo.done === true
        ? 'done'
        : ''}
    ${props.todo.deleting
        ? 'deleting'
        : ''}
    `
}

const TodoRow = (props) => {
    return (
        <Table.Row className={getClassName(props)}>
            <Table.Cell>{props.todo.title}</Table.Cell>
            <Table.Cell>{props.todo.description}</Table.Cell>
            <Table.Cell>{props.todo.targetDate}</Table.Cell>
            <Table.Cell className="options">
                {props.todo.done === false
                    && <Button className="option-buttons" color='green' onClick={props.completeTodo}>
                        {/* <i className="fa fa-check"></i> */}Complete
                    </Button>}
                <Button className="option-buttons" color='blue' onClick={props.startEditing}>
                    {/* <i className="fa fa-pencil"></i> */}Edit
                </Button>
                <Button className="option-buttons" color='red' onClick={props.deleteTodo}>
                    {/* <i className="fa fa-trash"></i> */}Delete
                </Button>
            </Table.Cell>
        </Table.Row>
    )
}

export default TodoRow