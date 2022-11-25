import React from "react";
import CounterContainer from "./redux-counter/components/CounterContainer";
// import TodoList from "./redux-toolkit-todolist/components/TodoList";

const App: React.FC = () => {
  return (
    <div className="App">
      <CounterContainer />
    </div>
  );
};

export default App;
