import { useSelector, useDispatch, connect } from "react-redux";
import "./ContactList.css";
import contactOperations from "../../redux/contact/contact-operations";
import { useEffect } from "react";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);

  const filteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactOperations.fetchContacts());
  }, [dispatch]);

  return (
    <ul className="ContactList">
      {filteredContacts().map(({ id, name, number }) => {
        return (
          <li className="ContactList__item" key={id}>
            {name}: {number}
            <button
              className="ContactList__button"
              onClick={() => dispatch(contactOperations.deleteContact(id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(contactOperations.fetchContacts()),
});

export default connect(null, mapDispatchToProps)(ContactList);
