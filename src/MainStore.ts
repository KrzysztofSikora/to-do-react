import {combineReducers, createStore, Reducer, Store} from "redux";
import {ToDoReducer, ToDoReducerState} from "./Components/Reducers/ToDoReducer";

export interface ApplicationState {
    ToDoReducer: ToDoReducerState;
}

export const RootReducer: Reducer<ApplicationState> = combineReducers({
    ToDoReducer: ToDoReducer
});

export const MainStore: Store<ApplicationState> = createStore(RootReducer);