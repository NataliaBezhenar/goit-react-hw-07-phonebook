import { useSelector, useDispatch } from "react-redux";
import "./ContactList.css";
import { deleteContact } from "../../redux/contact/contact-action";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);

  const filteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const dispatch = useDispatch();
  return (
    <ul className="ContactList">
      {filteredContacts().map(({ id, name, number }) => {
        return (
          <li className="ContactList__item" key={id}>
            {name}: {number}
            <button
              className="ContactList__button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
