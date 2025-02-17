import React, { useState } from "react";

function ToDoList() {
  //contain the data for the todolist
  const [todos, setTodos] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [todo, setTodo] = useState("");

  function handleClick() {
    setIsFormOpen((prev) => !prev);
  }

  function handleSubmit(e) {
    //default behaviour: sends a request & refreshes the page.
    e.preventDefault();

    //validations
    if (todo == "") return;

    setTodos((prev) => {
      let newTodo = {
        name: todo,
      };
      return [...prev, newTodo];
    });
  }

  return (
    <div className="mt-2">
      <button
        onClick={handleClick}
        className="bg-gray-800 rounded-lg px-4 py-2 text-white mb-2"
      >
        {!isFormOpen ? "Create ToDo" : "Close ToDo"}
      </button>
      {isFormOpen && (
        <form onSubmit={handleSubmit}>
          <input
            className="my-2 bg-gray-100 rounded-lg px-4 py-2"
            placeholder="Enter Todo"
            onChange={(e) => setTodo(e.target.value)}
          />
        </form>
      )}
      <div className="pl-2 grid grid-cols-2">
        {todos.map((todo, index) => (
          <div className="font-light text-xl">
            {index + 1}. {todo.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
