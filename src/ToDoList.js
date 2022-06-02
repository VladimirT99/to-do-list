import React, { Component } from 'react'
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';
import './ToDoList.css'

export class ToDoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: []
        }
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }
  
    create(newToDo){
        this.setState({todos: [...this.state.todos, newToDo]});
    }

    remove(id){
        this.setState({todos: this.state.todos.filter(todo => todo.id !== id)});
    }

    update(id, updatedTask){
        const updatedToDos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, task: updatedTask}
            }
                return todo;
        });
        this.setState({todos: updatedToDos});
    }
    toggleCompletion(id){
        const updatedToDos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, completed: !todo.completed}
            }
                return todo;
        });
        this.setState({todos: updatedToDos});
    }

    render() {
        const elements = this.state.todos.map(element => {
            return <ToDo task={element.task} completed = {element.completed} toggleToDo={this.toggleCompletion} key={element.id} removeToDo = {this.remove} id = {element.id} updateToDo = {this.update}/>
        });
    return (
      <div className = "ToDoList">
          <h1>To Do List! <span>A simple To Do List App</span></h1>
          <ul>
          {elements}
          </ul>
          <ToDoForm createToDo = {this.create}/>
      </div>
    )
  }
}

export default ToDoList