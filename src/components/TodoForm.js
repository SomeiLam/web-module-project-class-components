import React from "react";
import './Todo.css';

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ""
        }
    }
    
    handleChanges = e => {
        this.setState({
            input: e.target.value
        })
    }

    handleClick = e => {
        e.preventDefault();
        this.props.handleAdd(this.state.input);
    }

    render() {
        return (
            <form>
                <input type="text" name="input" onChange={this.handleChanges}/>
                <button onClick={this.handleClick}>Add a task</button>
            </form>
        )
    }
}

export default TodoList;