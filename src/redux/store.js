import { createStore } from "redux";
import { cakeReducer } from "./cakes/cakeReducer";

export const store = createStore(cakeReducer);