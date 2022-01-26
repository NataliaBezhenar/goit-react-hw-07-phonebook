import { createReducer } from "@reduxjs/toolkit";
import actions from "./contact-action";

export const contactsReducer = createReducer([], {
  [actions.fetchContactsSuccess]: (_, { payload }) => payload,
  [actions.addContactSuccess]: (state, { payload }) => {
    console.log("in contactsReducer, addContactSuccess action");
    if (state.find((contact) => contact.name === payload.name)) {
      console.log("same name");
      alert(payload.name + " is already in contacts");
      return;
    }
    return [...state, payload];
  },
  [actions.deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
