import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import TaskList from "./components/TaskList/TaskList";

function App() {
  return (
    <>
      <h1>Holder of AddTodo and TaskList:</h1>
      <AddTodo />
      <br />
      <TaskList />
    </>
  );
}

export default App;
