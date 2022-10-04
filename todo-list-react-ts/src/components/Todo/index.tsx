import React, { useEffect, useState } from "react";
import Footer from "./List/Footer";
import Form from "./Form";
import List from "./List";

function Todo() {
  const [hide, setHide] = useState("All");
  const [tasks, setTasks] = useState([]);
  const [allCheck, setAllCheck] = useState(false);
  useEffect(() => {
    console.log(tasks);
  }, [tasks]);
  if (tasks.length > 0) {
    return (
      <div className="todoapp">
        {" "}
        <h1>todos</h1>
        <Form
          addTask={setTasks}
          tasks={tasks}
          setTasks={setTasks}
          getAllCheckState={setAllCheck}
        />
        <List
          tasks={tasks}
          setTasks={setTasks}
          allCheckState={!allCheck}
          hide={hide}
        />
        <Footer tasks={tasks} setTasks={setTasks} setHide={setHide} />
      </div>
    );
  } else {
    return (
      <div className="todoapp">
        {" "}
        <h1>todos</h1>
        <Form
          addTask={setTasks}
          tasks={tasks}
          setTasks={setTasks}
          getAllCheckState={setAllCheck}
        />
      </div>
    );
  }
}

export default Todo;
