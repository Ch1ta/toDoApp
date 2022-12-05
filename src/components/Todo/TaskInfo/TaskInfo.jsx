import React from "react";
import {useLocation} from "react-router-dom";
import styles from './TaskInfo.module.css'

export const TaskInfo = (props) => {
    let id = useLocation().pathname
    id = id.split('/').join('');
    console.log(id)
    return (
        <div>
            <div className={styles.picture}>
            </div>
            <div className={styles.name}>
                {props.tasks[id].name}
            </div>
            <div className={styles.text}>
                {props.tasks[id].text}
            </div>
        </div>
    )
}