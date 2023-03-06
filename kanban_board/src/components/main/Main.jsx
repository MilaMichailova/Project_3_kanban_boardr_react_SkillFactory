import { Routes, Route } from "react-router-dom";
import Board from "../board/Board";
import TaskDetail from "../task-detail/TaskDetail";
import css from "./Main.module.css";

const Main = (props) => {
  return (
    <main className={css.main}>
      <Routes>
        {/* <Route exact path={"/"}> попытка исправить смотрела как тут
        https://reactrouter.com/en/main/components/routes */}
        <Route exact path="/" element={<Main />}>
          <Board {...props} />
        </Route>
        {/* <Route path={"/tasks/:taskId"}> попытка исправить смотрела как тут
        https://reactrouter.com/en/main/components/routes */}
        <Route path="/tasks/:taskId" element={<TaskDetail />}>
          <TaskDetail {...props} />
        </Route>
      </Routes>
    </main>
  );
};

export default Main;
