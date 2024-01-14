import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState("");
  return (
    <div className=" p-3">
      <input
        placeholder="Add todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className=" bg-blue-100 rounded-md px-2 py-1"
      />{" "}
      <button
        onClick={() => {
          setTitle("");
          onAddTodo(title);
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
      >
        Add
      </button>
    </div>
  );
}
