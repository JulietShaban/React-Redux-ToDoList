import React, { Component } from "react";

class CreateTaskInput extends Component {
  state = {
    value: "",
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };
  handleTaskCreate = () =>{
    this.props.onCreate(this.state.value);
    this.setState({ value: ''})
  }

  render() {
    return (
      <div className="create-task">
        <input
          value={this.state.value}
          onChange={this.handleChange}
          className="create-task__input"
          type="text"
            />
        <button 
        onClick={this.handleTaskCreate}
        className="btn create-task__btn">Create</button>
      </div>
    );
  }
}

export default CreateTaskInput;
