
function Contact({ id, name, city, onDelete, onEdit, isEditing, onNameChange, onCityChange}) {
  if (isEditing) {
    return (
      <div className="contact-container">
        <input value={name} onChange={e => onNameChange(id, e.target.value)} />
        <input value={city} onChange={e => onCityChange(id, e.target.value)} />
        <button onClick={() => onEdit(null)}>Save</button>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    );
  } else {
    return (
      <div className="contact-container">
        <p>{name}</p>
        <p>City: {city}</p>
        <button onClick={() => onEdit(id)}>Edit</button>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    );
  }
}
export default Contact