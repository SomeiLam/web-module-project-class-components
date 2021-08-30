// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
import './Todo.css';

const TodoList = props => {

    const handleClick = () => {
        props.handleClear();
    }

    return (
        <div className="list">
            {props.tasks.map(task => (
                <Todo key={task.id} task={task} handleToggleComplete={props.handleToggleComplete}/>
            ))}
            <button onClick={handleClick} className="clear-btn">
                Clear Completed Tasks
            </button>
        </div> 
    )
}

export default TodoList;