import React from "react";
import CounterContainer from "./redux-counter/components/CounterContainer";
import TodoApp from "./redux-todolist/components/TodoApp";
// import TodoList from "./redux-toolkit-todolist/components/TodoList";

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoApp />
      {/* <CounterContainer /> */}
    </div>
  );
};

export default App;
