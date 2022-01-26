import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact } from "./contact-action";

export const contactsReducer = createReducer([], {
  [addContact]: (state, { payload }) => {
    if (state.find((contact) => contact.name === payload.name)) {
      alert(payload.name + " is already in contacts");
      return;
    }
    return [...state, payload];
  },
  [deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});
