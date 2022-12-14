import TodoList from "../src/pages/TodoList/TodoList";
import { TodoItem } from "./pages/TodoItem/TodoItem";
import { Route, Routes } from "react-router-dom";
import Header from "./layouts/ Header/Header";
import { useEffect, useState } from "react";
import { tasksApi } from "./api/api";
import styles from "./App.module.css";

function App() {
  const [items, setItems] = useState([]);
  const [currentTask, setCurrentTask] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    tasksApi.getTasks().then((response) => setItems(response));
    setIsFetching(false);
  }, []);

  useEffect(() => {
    !isFetching && setCurrentTask(items.find((item) => item.id === "1"));
    console.log(items);
  });

  return (
    <div className={styles.App}>
      <div className={styles.todo}>
        <Header />
        <Routes>
          <Route path="/" element={<TodoList items={items} />}></Route>
          <Route
            path="/:id"
            element={<TodoItem currentTask={currentTask} />}
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
