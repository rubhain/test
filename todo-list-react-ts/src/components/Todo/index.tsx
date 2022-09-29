import React, { useEffect, useState } from "react";
import Form from "./Form";
import List from "./List";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [allCheck, setAllCheck] = useState(false);
  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <div>
      {" "}
      <h1>todos</h1>
      <Form
        addTask={setTasks}
        tasks={tasks}
        setTasks={setTasks}
        getAllCheckState={setAllCheck}
      />
      <List tasks={tasks} setTasks={setTasks} allCheckState={!allCheck} />
    </div>
  );
}

export default Todo;
