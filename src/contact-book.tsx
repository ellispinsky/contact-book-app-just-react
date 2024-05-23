import Contact from "./Components/contact";
import { FormEvent, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

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
    const newContact: ContactType = {
      id: uuidv4() ,
      name: event.target[0].value,
      city: event.target[1].value,
    };
    setContacts([...contacts, newContact]);
    
  }
  function handleDelete(contactID: number)
  {
    setContacts(contacts.filter(contact => contact.id !== contactID));
  }
  function handleEdit(index)
  {
    setEditingId(index);
  }
  function handleNameChange(id : number , newName : string)
  {
    setContacts(contacts.map(contact => 
      {
        if(contact.id === id)
        {
          return {...contact, name: newName}
        }
        return contact
      }))
  }
  function handleCityChange(id : number , newCity : string)

  {
    setContacts(contacts.map(contact =>
      {
        if(contact.id === id)
        {
          return {...contact , city: newCity}
        }
        return contact
      }
      ))
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
      {contacts.map((contact) => (
        <Contact name={contact.name} city={contact.city} key={contact.id} id={contact.id} 
        onDelete = {handleDelete} onEdit = {handleEdit} isEditing={editingId === contact.id} onNameChange={handleNameChange} onCityChange={handleCityChange}/>
      ))}
    </>
  );
}

export default ContactBook;
