import { useSelector, useDispatch } from "react-redux";
import "./ContactList.css";
import contactOperations from "../../redux/contact/contact-operations";
import { useGetAllContactsQuery } from "../../redux/contact/contact-reducers";

const ContactList = () => {
  let contacts = [];
  const { data, error, isFetching, isError } = useGetAllContactsQuery();
  console.log(isFetching);
  if (!isFetching) {
    console.log(data);
    contacts = data;
  }
  console.log(contacts);
  const filter = useSelector((state) => state.filter);
  console.log(filter);
  const filteredContacts = () => {
    if (contacts) {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter)
      );
    }
  };

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(contactOperations.fetchContacts());
  // }, [dispatch]);

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

export default ContactList;
