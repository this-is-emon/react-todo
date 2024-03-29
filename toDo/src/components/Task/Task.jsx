import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Task({ todo, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          // eslint-disable-next-line react/prop-types
          value={todo.title}
          onChange={(e) => {
            onChange({
              ...todo,
              title: e.target.value,
            });
          }}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 m-1 rounded"
          onClick={() => setIsEditing(false)}
        >
          Save
        </button>
      </>
    );
  } else {
    todoContent = (
      <>
        {/* eslint-disable-next-line react/prop-types */}
        {todo.title}{" "}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 m-1 rounded"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        // eslint-disable-next-line react/prop-types
        checked={todo.done}
        onChange={(e) => {
          onChange({
            ...todo,
            done: e.target.checked,
          });
        }}
      />
      {todoContent} {/* eslint-disable-next-line react/prop-types */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
        // eslint-disable-next-line react/prop-types
        onClick={() => onDelete(todo.id)}
      >
        Delete
      </button>
    </label>
  );
}
