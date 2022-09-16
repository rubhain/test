import { useEffect, useState } from "react";
import List from "./List";
import Form from "./Form";
import "./styles.css";

interface addContact {
  fullname: any;
  phone_number: any;
}
interface contacts {
  fullname: any;
  phone_number: any;
}

function Contacts() {
  const [contacts, setContacts] = useState([
    { fullname: "Bugrahan", phone_number: 1123123 },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
