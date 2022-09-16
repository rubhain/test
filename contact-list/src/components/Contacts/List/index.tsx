import { useState } from "react";

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

      <ul>
        {filtered.map((contact: any, i: number) => (
          <li key={i}>{contact.fullname}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
