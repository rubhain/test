import { useState } from "react";
import "../styles.css";

function List({ contacts }: { contacts: any }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item: any) => {
    return Object.keys(item).some((key) => {
      return item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase());
    });
  });

  return (
    <div>
      <input
        placeholder="Filter Contact"
        value={filterText}
        onChange={(e) => {
          setFilterText(e.target.value);
        }}
      />

      <ul className="list">
        {filtered.map((contact: any, i: number) => (
          <li key={i}>
            <span>{contact.fullname}</span>
            <span>{contact.phone_number}</span>
          </li>
        ))}
      </ul>
      <p>Total contacts ({filtered.length})</p>
    </div>
  );
}

export default List;
