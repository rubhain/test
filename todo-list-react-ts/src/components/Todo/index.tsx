import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Form from "./Form";
import List from "./List";

function Todo() {
  const [hide, setHide] = useState("All");
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
      <List
        tasks={tasks}
        setTasks={setTasks}
        allCheckState={!allCheck}
        hide={hide}
      />
      <Footer tasks={tasks} setTasks={setTasks} setHide={setHide} />
    </div>
  );
}

export default Todo;
