import { Routes, Route } from "react-router-dom";
import Board from "../board/Board";
import TaskDetail from "../task-detail/TaskDetail";
import css from "./Main.module.css";

const Main = (props) => {
  return (
    <main className={css.main}>
      <Routes>
        <Route path="/*" element={<Board {...props} />} />
        <Route path=":taskId/" element={<TaskDetail {...props} />} />

        {/* <Route exact path={"/"}>
          <Board {...props} />
        </Route>
        <Route path={"/tasks/:taskId"}>
          <TaskDetail {...props} />
        </Route>{" "} */}
      </Routes>
    </main>
  );
};

export default Main;
