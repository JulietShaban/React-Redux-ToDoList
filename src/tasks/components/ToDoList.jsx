import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import CreateTaskInput from "./CreateTaskInput";
import { createTask, updateTask, deleteTask } from "../tasksGateway";
import * as tasksActions from "../tasks.actions";
import { tasksListSelector } from "../tasks.selectors";
import TasksList from "./TasksList";

class ToDoList extends Component {
  componentDidMount() {
    this.props.getTaskList();
  }

  onCreate = (text) => {
    const newTask = {
      text,
      createDate: new Date().toISOString,
      done: false,
    };

    createTask(newTask).then(() => this.fetchTasksList);
  };
  handleTaskStatusChange = (id) => {
    const { tasks } = this.state;
    const { done, text, createDate } = tasks.find((task) => task.id === id);
    const updatedTask = {
      text,
      createDate,
      done: !done,
    };

    updateTask(id, updatedTask).then(() => this.fetchTasksList());
  };

  handleTTaskDelete = (id) => {
    deleteTask(id).then(() => this.fetchTasks());
  };

  render() {
    return (
      <>
        <h1 className="title">Todo List</h1>
        <main className="todo-list">
          <CreateTaskInput onCreate={this.onCreate} />
          <TasksList
            tasks={this.props.tasks}
            onChange={this.handleTaskStatusChange}
            onDelete={this.handleTTaskDelete}
          />
        </main>
      </>
    );
  }
}

ToDoList.propTypes = {
  getTaskList: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape()),
};

const mapDispatch = {
  getTaskList: tasksActions.getTaskList,
};

const mapState = state => {
  return {
    tasks: tasksListSelector(state)
  }
}

export default connect(mapState, mapDispatch)(ToDoList);
