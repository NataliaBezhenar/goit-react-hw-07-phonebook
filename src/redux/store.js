import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filter/filter-reducer";
import { contactApi } from "./contact/contact-reducers";

const store = configureStore({
  reducer: {
    filter: filterReducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});

export { store };
