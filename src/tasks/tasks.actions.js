import { fetchTasksList } from "./tasksGateway";

export const TASKS_LIST_RECIEVED = "TASKS_LIST_RECEIVED";

export const tasksListRecieved = (tasksList) => {
  const action = {
    type: TASKS_LIST_RECIEVED,
    payload: {
        tasksList,
    }
  };
  return action;
};

export const getTaskList = () => {
  const thunkAction = function (dispatch) {
    fetchTasksList().then((tasksList) =>
      dispatch(tasksListRecieved(tasksList))
    );
  };

  return thunkAction;
};
