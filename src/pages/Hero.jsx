import React, { useState } from "react";
import "./hero.css";

import Button from "@mui/material/Button";
function Hero() {
  const [value, setValue] = useState();
  const [todos, setTodos] = useState([]);
  const handleclick = () => {
    setTodos([...todos, value]);
    setValue("");
  };
  return (
    <>
      <div className="todolist">
        <h2>Todo List</h2>

        <div className="button1">
          <input
            type="text"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <Button variant="contained" onClick={handleclick}>
            Add
          </Button>
        </div>

        <div className="items">
          <ol>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default Hero;
