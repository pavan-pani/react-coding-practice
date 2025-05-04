import { useRef, useState, useEffect } from "react";
import "./todo.scss";

const Todo = () => {
  const inputRef = useRef(null);
  const [nextId, setNextId] = useState(1);

  const [data, setData] = useState([]);

  useEffect(() => {
    let stored = JSON.parse(localStorage.getItem("data")) || [];
    setData(stored);
    setNextId(stored.length ? stored[stored.length - 1].id + 1 : 1);
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setData((prev) => [
    //   ...prev,
    //   { id: nextId, task: inputRef.current.value, done: false },
    // ]);

    let incomingData = {
      id: nextId,
      task: inputRef.current.value,
      done: false,
    };
    let updated = [...data, incomingData];
    console.log(incomingData, updated);
    setData(updated);
    setNextId((prev) => prev + 1);
  };

  const handledelete = (id) => {
    let newData = data.filter((val) => val.id != id);
    setData(newData);
  };

  const handleDone = (id) => {
    const updated = data.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    );
    setData(updated);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" ref={inputRef} />
        <button type="submit">Add to list</button>
      </form>

      {data.map((item, i) => {
        return (
          <div key={item.id} className="tasks">
            <p className={item.done ? "done" : ""}>{item.task}</p>
            <button onClick={() => handleDone(item.id)}>
              {item.done ? "undo" : "done"}
            </button>
            <button onClick={() => handledelete(item.id)}>Delete</button>
          </div>
        );
      })}
    </>
  );
};

export default Todo;
