import styles from "./todoitem.module.css";

export default function Todoitem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  }
  const cn = item.done ? styles.completed : "";
  // Ensure item is converted to a string to avoid React errors
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={cn} onClick={() => handleClick(item.name)}>
          {" "}
          {String(item.name)}
        </span>{" "}
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deletebtn}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
