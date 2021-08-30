import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';

const tasks = [
    {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
    },
    {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
    }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
    this.state = {
      tasks: tasks
    }
  }
  
  handleToggleComplete = (id) => {
    this.setState({
      ...this.state,
      tasks: this.state.tasks.map((task) => {
        if (task.id === id) {
          return({
            ...task,
            completed: !task.completed
          });
        } else {
          return(task);
        }
      })
    })
  }

  handleAdd = (task) => {
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    }
    this.setState({
      ...this.state,
      tasks: [...this.state.tasks, newTask]
    });
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      tasks: this.state.tasks.filter((task) => {
        return(task.completed === false);
      })
    });
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>My To-Do List</h1>
          <TodoForm handleAdd={this.handleAdd}/>
        </div>
        <TodoList tasks={this.state.tasks} handleClear={this.handleClear} handleToggleComplete={this.handleToggleComplete}/>
      </div>
    );
  }
}

export default App;
