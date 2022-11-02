import React, { Component } from "react";
import PropTypes from 'prop-types';

class CreateTaskInput extends Component {
  state = {
    value: "",
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };
  handleCreate = () => {
    this.props.onCreate(this.state.value);
    this.setState({ value: "" });
  };

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
          onClick={this.handleCreate}
          className="btn create-task__btn"
        >
          Create
        </button>
      </div>
    );
  }
}
CreateTaskInput.propTypes ={
  onCreate: PropTypes.func.isRequired,
}
export default CreateTaskInput;
