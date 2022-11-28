import { Routes, Route } from "react-router-dom";
import TodoDetailPage from "../pages/TodoDetailPage";
import TodoListPage from "../pages/TodoListPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<TodoListPage />} />
      <Route path="/detail/:id" element={<TodoDetailPage />} />
    </Routes>
  );
};

export default Router;
