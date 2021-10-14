import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { addToCart } from "../../redux/contacts/contactsActions";
import { ContactFormStyled } from "./ContactFormStyled";
import { useDispatch } from "react-redux";

const ContactForm = ({ contacts }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const onHandleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, number, id: uuidv4() });
    setName("");
    setNumber("");
  };

  const onSubmit = (contact) => {
    contacts.some(
      (item) =>
        item.name.toLocaleLowerCase() === contact.name.toLocaleLowerCase()
    )
      ? alert(`${contact.name} is already in contacts.`)
      : dispatch(addToCart(contact));
  };

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <ContactFormStyled onSubmit={onHandleSubmit} method="post">
      <label>
        Name
        <br />
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={onHandleChange}
          value={name}
        />
      </label>
      <label>
        Number
        <br />
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={onHandleChange}
          value={number}
        />
      </label>
      {name && (
        <button type="submit" onClick={onHandleSubmit}>
          Add contact
        </button>
      )}
    </ContactFormStyled>
  );
};

export default ContactForm;
