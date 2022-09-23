import React, { useEffect, useState } from "react";

function List({ tasks }: { tasks: any }) {
  const [isChecked, setIsChecked] = useState({});

  const handleSingleCheck = (e: any) => {
    setIsChecked({ ...isChecked, [e.target.id]: e.target.checked });
  };

  return (
    <div>
      <ul>
        {tasks.map((task: any, i: number) => (
          <li key={i}>
            {" "}
            <input type="checkbox" id={`${i}`} onChange={handleSingleCheck} />
            {console.log(isChecked)}
            {task.task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
