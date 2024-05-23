import Contact from "./Components/contact";
import { FormEvent, useState } from "react";

type ContactType = 
{
  id: number;
  name: string;
  city: string;
}

function ContactBook() {
  const [contacts, setContacts] = useState<ContactType[]>([
    { id : 0 , name: "Jack Pinsky", city: "London" },
    { id: 1 , name: "Mason Smith", city: "NYC" },
    { id : 2 , name: "Mike oxmaul", city: "London" },
    { id: 3 , name: "peter smith", city: "NYC" }
  ]);
  const [editingId, setEditingId] = useState<number | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const newContact = {
      name: event.target[0].value,
      city: event.target[1].value,
    };
    setContacts([...contacts, newContact]);
    
  }
  function handleDelete(index)
  {
    
    setContacts(contacts.filter((_, idx) => idx !== index));

    
  }
  function handleEdit(index)
  {
    setEditingId(index);
  }
  function handleNameChange(index , newName)
  {
    setContacts(contacts.map(contact , id))
  }
  function handleCityChange(index , newCity)
  {
    
  }

  return (
    <>
      <div className="add-container">
        <h1 className="">Add a new contact</h1>
        <form onSubmit={handleSubmit}>
          <label>
            name
            <input title="name"></input>
          </label>

          <label>
            city
            <input title="name"></input>
          </label>
          <input title="" type="submit" value="Add Contact"></input>
        </form>
      </div>
      {contacts.map((contact, index) => (
        <Contact name={contact.name} city={contact.city} key={index} id={index} 
        onDelete = {handleDelete} onEdit = {handleEdit} isEditing={editingId === index} onNameChange={handleNameChange} onCityChange={handleCityChange}/>
      ))}
    </>
  );
}

export default ContactBook;
