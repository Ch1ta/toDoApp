import styles from './App.module.css';
import Todo from './components/Todo/Todo'
import {NavLink} from "react-router-dom";


function App() {
  return (
    <div className={styles.App}>
        <Todo className = {styles.todo}/>
    </div>
  );
}

export default App;
