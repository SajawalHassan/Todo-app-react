import React from 'react'
import './Todo.css'
import { List, ListItemAvatar, ListItem, ListItemText } from '@material-ui/core';

function Todo(props) {
    return (
        <List className = "todo_list">
        {/* Putting a "todo" below the persons todo */}
            <ListItem>
                <ListItemText primary = {props.text} secondary = "Todo" />
            </ListItem>
        </List>
    )
}

export default Todo
