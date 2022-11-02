import React from "react";
import { Provider } from "react-redux";
import ToDoList from "./tasks/components/ToDoList";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <ToDoList />
    </Provider>
  );
};

export default App;
