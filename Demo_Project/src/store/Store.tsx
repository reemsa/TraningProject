import rootReducer from "../reducers/RootReducer";
import { createStore } from "redux";
export type AppState = ReturnType<typeof rootReducer>;
const store = createStore(rootReducer);
export default store