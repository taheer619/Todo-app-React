import { useState, useEffect } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  // Load todos from local storage when the component mounts
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, [setTodos]);

  // Update local storage whenever todos changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleSubmit(e) {
    e.preventDefault();

    // Check if the input is empty or consists only of spaces
    if (todo.name.trim() === "") {
      alert("Please enter a valid input");
      setTodo({ name: "", done: false });
    } else {
      if (!Array.isArray(todos)) {
        console.error("todos is not an array:", todos);
        return;
      }

      // Add the new todo item to the list
      setTodos([...todos, todo]);
      // Reset the input field
      setTodo({ name: "", done: false });
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.todoform}>
      <input
        className={styles.modernInput}
        placeholder="Enter todo item"
        onChange={(e) => setTodo({ name: e.target.value, done: false })}
        value={todo.name}
        type="text"
      />
      <button className={styles.modernButton} type="submit">
        Add
      </button>
    </form>
  );
}
