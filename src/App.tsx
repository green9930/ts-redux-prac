import React from "react";
// import CounterContainer from "./redux-counter/components/CounterContainer";
// import TodoApp from "./redux-todolist/components/TodoApp";
// import { Counter } from "./redux-toolkit-counter/components/Counter";
import Router from "./redux-toolkit-todolist/router/Router";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <TodoApp /> */}
      {/* <CounterContainer /> */}
      <Router />
    </div>
  );
};

export default App;
