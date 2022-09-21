import React, { useEffect, useState } from "react";
import Form from "./Form";
import List from "./List";

function Todo() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);
  return (
    <div>
      {" "}
      <h1>todos</h1>
      <Form addTask={setTasks} tasks={tasks} />
      <List />
    </div>
  );
}

export default Todo;
