import React, { Component } from 'react'
import { v4 } from 'uuid';

export class ToDoForm extends Component {
  constructor(props){
      super(props);
      this.state = {
          task: "",

      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.createToDo({...this.state, id: v4(), completed: false});
        this.setState({task : ""});
    }
    render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
              <label htmlFor='task'></label>
              <input placeholder='New ToDo' name = "task" type='text' id='task' value={this.state.task} onChange={this.handleChange}/>
              <button>Add</button>
          </form>
      </div>
    )
  }
}

export default ToDoForm