import styles from './App.module.css';
import Todo from './components/Todo/Todo'

function App() {
  return (
    <div className={styles.App}>
        <Todo className = {styles.todo}/>
    </div>
  );
}

export default App;
