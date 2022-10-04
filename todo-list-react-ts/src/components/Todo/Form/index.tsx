import React, { useEffect, useState } from "react";
import List from "../List";

const initialFormValues = { task: "" };

function Form({
  addTask,
  tasks,
  setTasks,
  getAllCheckState,
}: {
  addTask: any;
  tasks: any;
  setTasks: any;
  getAllCheckState: any;
}) {
  const [form, setForm] = useState(initialFormValues);

  const onChangeInput = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (form.task === "") {
      return false;
    }
    addTask([
      ...tasks,
      {
        id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 0,
        text: form,
        checked: false,
      },
    ]);
  };

  useEffect(() => {
    setForm(initialFormValues);
  }, [tasks]);

  //allCheck btn
  const [allCheck, setAllCheck] = useState(false);

  const onAllChecked = (e: any) => {
    setAllCheck(!allCheck);
    getAllCheckState(allCheck);
  };

  //return
  if (tasks.length > 0) {
    return (
      <div>
        <form onSubmit={onSubmit}>
          <section className="main">
            <input
              className=""
              type="checkbox"
              defaultChecked={allCheck}
              onClick={onAllChecked}
            />{" "}
            <label htmlFor="toggle-all">Mark all as complete</label>
            <input
              className="new-todo"
              name="task"
              placeholder="What needs to be done?"
              value={form.task}
              onChange={onChangeInput}
            />
          </section>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={onSubmit}>
          <input
            className="new-todo"
            name="task"
            placeholder="What needs to be done?"
            value={form.task}
            onChange={onChangeInput}
          />
        </form>
      </div>
    );
  }
}

export default Form;
function getAllcheckState(allCheck: boolean) {
  throw new Error("Function not implemented.");
}
