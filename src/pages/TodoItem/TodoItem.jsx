import React from "react";
import styles from "./TodoItem.module.css";

export const TodoItem = ({ currentTask }) => {
  return (
    <div className={styles.main}>
      <div className={styles.pic}></div>
      {currentTask && (
        <div>
          <h1 className={styles.name}>{currentTask.title}</h1>
          <p className={styles.text}>{currentTask.text}</p>
        </div>
      )}
    </div>
  );
};
