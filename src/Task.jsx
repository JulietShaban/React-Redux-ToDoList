import React from "react";
import PropTypes from "prop-types";

const Task = ({ id, done, onChange, onDelete, text }) => {
  const listIemClasses = `list-item ${done ? "list-item_done" : ""}`;
  return (
    <li className={listIemClasses}>
      <input
        className="list-item__checkbox"
        type="checkbox"
        defaultChecked={done}
        onChange={() => onChange(id)}
      />
      {text}

      <button
        onClick={() => onDelete(id)}
        className="list-item__delete-btn"
      />
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string,
  done: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Task;
