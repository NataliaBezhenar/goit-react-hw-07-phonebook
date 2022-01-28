import axios from "axios";
import actions from "./contact-action";

axios.defaults.baseURL = "https://61f3e8f010f0f7001768c730.mockapi.io/";

const fetchContacts = () => async (dispatch) => {
  dispatch(actions.fetchContactsRequest());
  try {
    const { data } = await axios.get("/contacts");
    dispatch(actions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(actions.fetchContactsError(error));
  }
};

const addContact = (name, number) => async (dispatch) => {
  const contact = { name, number };
  dispatch(actions.addContactRequest);
  try {
    console.log("add contact async");
    const { data } = await axios.post("/contacts", contact);
    dispatch(actions.addContactSuccess(data));
  } catch (error) {
    dispatch(actions.addContactError(error));
  }
};

const deleteContact = (id) => async (dispatch) => {
  dispatch(actions.deleteContactRequest());
  try {
    console.log("delete async");
    await axios.delete(`/contacts/${id}`);
    dispatch(actions.deleteContactSuccess(id));
  } catch (error) {
    actions.deleteContactError(error);
  }
};

export default { addContact, deleteContact, fetchContacts };
