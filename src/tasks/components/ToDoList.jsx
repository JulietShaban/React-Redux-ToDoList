import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import CreateTaskInput from "./CreateTaskInput";
import * as tasksActions from "../tasks.actions";
import { sortedTasksListSelector} from "../tasks.selectors";
import TasksList from "./TasksList";

class ToDoList extends Component {
  componentDidMount() {
    this.props.getTaskList();
  }

  render() {
    return (
      <>
        <h1 className="title">Todo List</h1>
        <main className="todo-list">
          <CreateTaskInput onCreate={this.props.createTask} />
          <TasksList
            tasks={this.props.tasks}
            onChange={this.props.updateTask}
            onDelete={this.props.deleteTask}
          />
        </main>
      </>
    );
  }
}

ToDoList.propTypes = {
  createTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  getTaskList: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape()),
};

const mapDispatch = {
  getTaskList: tasksActions.getTaskList,
  updateTask: tasksActions.updateTask,
  deleteTask: tasksActions.deleteTask,
  createTask: tasksActions.createTask,
};

const mapState = (state) => {
  return {
    tasks: sortedTasksListSelector(state),
  };
};

export default connect(mapState, mapDispatch)(ToDoList);
