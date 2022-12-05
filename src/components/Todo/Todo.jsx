import React, {useState} from "react"
import styles from './Todo.module.css'
import {Route, Routes} from 'react-router-dom'
import Header from "./ Header/Header";
import TaskList from "./TaskList/TaskList";
import {TaskInfo} from "./TaskInfo/TaskInfo";
import {useParams} from "react-router-dom";

const Todo = (props) => {
    const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    let initialState = [
        {id: 0, name: 'утром', text: lorem},
        {id: 1, name: 'пресс качат', text: lorem},
        {id: 2, name: 'бегит', text: lorem},
        {id: 3, name: 'турник', text: lorem},
        {id: 4, name: 'анжуманя', text: lorem},
        {id: 5, name: 'вечером', text: lorem},
        {id: 6, name: 'пресс качат', text: lorem},
        {id: 7, name: 'бегит', text: lorem},
        {id: 8, name: 'турник', text: lorem},
        {id: 9, name: 'анжумания', text: lorem},
        {id: 10, name: 'гантбли', text: lorem},
    ]

    let [tasks, setTasks] = useState(initialState)

    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <Header/>
            </div>
            <Routes>
                <Route path="/" element={<div className={styles.content}><TaskList tasks={tasks}/></div>}/>
                <Route path="/:id" element={<div className={styles.content}><TaskInfo tasks={tasks}/></div>}/>
            </Routes>
        </div>
    )
}

export default Todo