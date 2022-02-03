import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import Todo from "./components/Todo";
import "./App.css";
import Todolist from "./components/Todolist";

function App() {
  const [todos, setTodos] = useState(["Shower", "Sleep"]);
  const [input, setInput] = useState("");

  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Todolist</h1>
      <form action="">
        <TextField
          id="standard-basic"
          label="Enter a task"
          variant="standard"
          value={input}
          onChange={inputHandler}
        />
        <Button
          disabled={!input}
          variant="contained"
          type="submit"
          onClick={submitHandler}
        >
          Add to do
        </Button>
      </form>
      <Todolist todos={todos} />
    </div>
  );
}

export default App;
