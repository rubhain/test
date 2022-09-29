import React, { useEffect } from "react";

function List({
  tasks,
  setTasks,
  allCheckState,
}: {
  tasks: any;
  setTasks: any;
  allCheckState: boolean;
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
      let allChecked = tasks.map((task: any) => {
        return { ...task, checked: allCheckState };
      });
      setTasks(allChecked);
    } else {
      let allChecked = tasks.map((task: any) => {
        return { ...task, checked: allCheckState };
      });
      setTasks(allChecked);
    }
  }, [allCheckState]);

  return (
    <div>
      {" "}
      <ul>
        {tasks.map((task: any) => (
          <li key={task.id} id={task.id}>
            <div>
              <input
                id={task.id}
                type="checkbox"
                defaultChecked={tasks.checked}
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
