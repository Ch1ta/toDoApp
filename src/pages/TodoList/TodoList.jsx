import React from "react";
import styles from "./TodoList.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const TodoList = ({ items }) => {
  const navigate = useNavigate();

  const onTaskClick = (id) => {
    navigate(`/${id}`);
  };

  return (
    <div className={styles.main}>
      {items.map((item) => (
        <div className={styles.item} onClick={() => onTaskClick(item.id)}>
          <div className={styles.title}>{item.title}</div>
          <div className={styles.pic}></div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
