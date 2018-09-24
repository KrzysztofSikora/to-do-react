import {ITask} from "../../Models/ITask";
import {IToDoActions, ToDoActionTypes} from "../Actions/ToDoActions";

export interface ToDoReducerState {
    items: ITask[];
}

const initialState: ToDoReducerState = {
    items: []
}

export const ToDoReducer = (state: ToDoReducerState = initialState, action: IToDoActions): ToDoReducerState => {
    switch (action.type) {
        case ToDoActionTypes.ToDoActionsGetAll:
        return {
            ...state,
            items: <ITask[]> action.payload
        };
        case ToDoActionTypes.ToDoActionsUpdate:

            return {
                ...state,
            }
        default:
            return state;

    }
}