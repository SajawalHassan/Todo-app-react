import React from 'react'
import './Todo.css'

import { List, ListItem, ListItemText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import db from './firebase'

function Todo(props) {
    return (
        <List className = "todo_list">
        {/* Putting a "todo" below the persons todo */}
            <ListItem>
                <ListItemText primary = {props.todo.todo} secondary = "Todo" />
            </ListItem>
            <DeleteIcon onClick = {event => db.collection('todos').doc(props.todo.id).delete()} />
        </List>
    )
}

export default Todo
