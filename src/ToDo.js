import React, { Component } from 'react'
import "./ToDo.css"

export class ToDo extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task,
            completed : this.props.completed
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        
    }
    handleRemove(){
        this.props.removeToDo(this.props.id);
    }
    toggleForm(){
        this.setState({isEditing: !this.state.isEditing})
    }
    handleToggle()
    {
        this.props.toggleToDo(this.props.id);
    }
    handleEdit(e){
        e.preventDefault();
        this.props.updateToDo(this.props.id, this.state.task);
        this.setState({isEditing: false});
    }
    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    
    render() {
    let result;
    if(this.state.isEditing)
    {
        result = 
            <form onSubmit={this.handleEdit} className="ToDo">
                <input type='text' name='task' onChange={this.handleChange} value={this.state.task}/>
                <button>Save Edit</button>
            </form>
      
    }
    else{
        result = 
            <div className='ToDo'>
            <li className={this.props.completed === true ? "completed" : ""} onClick={this.handleToggle}>{this.props.task}</li>
            <button onClick={this.handleRemove}>X</button>
            <button onClick={this.toggleForm}>Edit</button>
        </div>;
        
    }
    return (
      result
    )
  }
}

export default ToDo