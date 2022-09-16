import React from "react";

function List({ contacts }: { contacts: any }) {
  return (
    <div>
      <ul>
        {contacts.map((contact: any, i: number) => (
          <li key={i}>{contact.fullname}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
