import React from "react";
import Task from "../../Task";
import PropTypes from "prop-types";

const TasksList = ({ tasks, onChange, onDelete }) => {
  return (
    <ul className="list">
      {tasks.map((task) => (
        <Task key={task.id} {...task} onChange={onChange} onDelete={onDelete} />
      ))}
    </ul>
  );
};

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      done: PropTypes.bool,
      id: PropTypes.string,
    })
  ).isRequired,
};

export default TasksList;
