import React, { useEffect } from "react";
import Footer from "../Footer";

function List({
  tasks,
  setTasks,
  allCheckState,
  hide,
}: {
  tasks: any;
  setTasks: any;
  allCheckState: boolean;
  hide: any;
}) {
  const setChecked = (e: any) => {
    let newTasks = tasks.map((task: any) => {
      if (parseInt(task.id) === parseInt(e.target.id)) {
        return { ...task, checked: !task.checked };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const deleteTask = (e: any) =>
    setTasks(
      tasks.filter((task: any) => parseInt(task.id) !== parseInt(e.target.id))
    );

  useEffect(() => {
    if (allCheckState === true) {
      console.log(allCheckState);
    } else {
      console.log(allCheckState);
    }
  }, [allCheckState]);

  const isCompleted = (e: any) => {
    if (e.checked === true && hide === "All") {
      return "completed";
    } else if (e.checked === true && hide === "Active") {
      return "completed hidden";
    } else if (e.checked === false && hide === "Completed") {
      return "hidden";
    }
  };

  return (
    <div>
      {" "}
      <ul>
        {tasks.map((task: any) => (
          <li key={task.id} id={task.id} className={`${isCompleted(task)}`}>
            <div>
              <input
                id={task.id}
                type="checkbox"
                defaultChecked={task.checked}
                onClick={setChecked}
              />
              <label>{task.text.task}</label>
              <button id={task.id} onClick={deleteTask} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
