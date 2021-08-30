import React, { useState } from 'react';
import './Todo.css';

const Todo = props => {

    const handleClick = () => {
        props.handleToggleComplete(props.task.id);
    }
    
    return (
        <div onClick={handleClick} className={`task${props.task.completed ? ' completed' : ''}`}>
            <p>{props.task.task}</p>
        </div>
    )
}

export default Todo;