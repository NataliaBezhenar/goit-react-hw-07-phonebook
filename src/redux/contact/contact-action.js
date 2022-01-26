import { createAction } from "@reduxjs/toolkit";
import shortid from "shortid";
import types from "./contact-types";

export const addContact = createAction(types.ADD, (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

export const deleteContact = createAction(types.DELETE);
