import Task from "../Task/Task";
// eslint-disable-next-line react/prop-types
export default function TaskList({ todos, onChangeTodo, onDeleteTodo }) {
  return (
    <ul>
      {/* eslint-disable-next-line react/prop-types */}
      {todos.map((todo) => (
        <li key={todo.id}>
          <Task todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo} />
        </li>
      ))}
    </ul>
  );
}
