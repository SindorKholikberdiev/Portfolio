import { useState } from "react";

const ToDoList = () => {
  const [todos, setTodos] = useState(["learn React", "Build a project"]);
  const [newTodo, setNewTodo] = useState("");

  // yangi vazifani ro'yxatga qo'shadigan function
  const handleAddTodo = () => {
    // agar input bo'sh bo'lsa hech narsa qilmaymiz
    if (newTodo.trim() === "") {
      return;
    }
    // agar user ro'yxatda allaqchon mavjud vazifani kiritsa alert orqali bu haqda xabar berish
    if (todos.includes(newTodo)) {
      alert("This task already exists in the list!");
      return;
    } else {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };
  return (
    <div>
      <h2>My To-Do List</h2>
      {/* inputni state bilan bog'lash */}
      <input
        type="text"
        placeholder="New task... "
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      {/* tugmani handleAddTodo function bilan bog'lash */}
      <button onClick={handleAddTodo}>Add Task</button>
      {/* ro'yxatni todos state dan render qilish (.map()) */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
