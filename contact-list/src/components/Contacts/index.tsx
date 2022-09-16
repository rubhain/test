import { useEffect, useState } from "react";
import List from "./List";
import Form from "./Form";

interface addContact {
  fullname: any;
  phone_number: any;
}

function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div>
      <List />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
