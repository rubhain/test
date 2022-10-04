import React, { useState } from "react";

function Footer({
  tasks,
  setTasks,
  setHide,
}: {
  tasks: any;
  setTasks: any;
  setHide: any;
}) {
  const unCompleted = tasks.filter((check: any) => check.checked === false);
  const [select, setSelect] = useState(["selected", "", ""]);
  const clearCompleted = (e: any) => {
    setTasks(tasks.filter((task: any) => task.checked === false));
  };
  const selectedButton = (e: any) => {
    switch (e.target.id) {
      case "All":
        setSelect(["selected", "", ""]);
        setHide("All");
        break;
      case "Active":
        setSelect(["", "selected", ""]);
        setHide("Active");
        break;
      case "Completed":
        setSelect(["", "", ""]);
        setHide("Completed");
        break;
      default:
    }
  };
  return (
    <footer className="footer">
      <span className="todo-count">
        {" "}
        <strong>{unCompleted.length}</strong>
        {unCompleted.length > 1 ? " items left" : " item left"}
      </span>
      <ul className="filters">
        <li>
          <a className={select[0]} id="All" onClick={selectedButton}>
            All
          </a>
        </li>
        <li>
          <a className={select[1]} id="Active" onClick={selectedButton}>
            Active
          </a>
        </li>
        <li>
          <a className={select[2]} id="Completed" onClick={selectedButton}>
            Completed
          </a>
        </li>
      </ul>{" "}
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
