import axios from "axios";
import actions from "./contact-action";

axios.defaults.baseURL = "http://localhost:4040";

const fetchContacts = () => (dispatch) => {
  dispatch(actions.fetchContactsRequest());
  axios
    .get("/contacts")
    .then(({ data }) => dispatch(actions.fetchContactsSuccess(data)))
    .catch((error) => dispatch(actions.fetchContactsError(error)));
};

const addContact = (name, number) => (dispatch) => {
  const contact = { name, number };

  dispatch(actions.addContactRequest);

  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch((error) => dispatch(actions.addContactError(error)));
};

const deleteContact = (id) => (dispatch) => {
  dispatch(actions.deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(actions.deleteContactSuccess(id)))
    .catch((error) => actions.deleteContactError(error));
};

export default { addContact, deleteContact, fetchContacts };
