import React, { useEffect, useState } from "react";
import List from "../List";

const initialFormValues = { task: "" };

function Form({ addTask, tasks }: { addTask: any; tasks: any }) {
  const [form, setForm] = useState(initialFormValues);

  const onChangeInput = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (form.task === "") {
      return false;
    }
    addTask([...tasks, form]);
  };

  useEffect(() => {
    setForm(initialFormValues);
  }, [tasks]);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="task"
          placeholder="What needs to be done?"
          value={form.task}
          onChange={onChangeInput}
        />
      </form>
    </div>
  );
}

export default Form;
