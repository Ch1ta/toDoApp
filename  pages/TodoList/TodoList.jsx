import React from "react";
import styles from "./TodoList.module.css";
import { useNavigate } from "react-router-dom";

const TodoList = (props) => {
  const navigate = useNavigate();

  const onTaskClick = (id) => {
    navigate(`/${id}`);
  };

  return (
    <div className={styles.main}>
      {props.tasks.map((task) => (
        <div
          className={styles.task}
          key={task.key}
          onClick={() => onTaskClick(task.id)}
        >
          <div className={styles.picture}></div>
          <div className={styles.text}>{task.name}</div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
