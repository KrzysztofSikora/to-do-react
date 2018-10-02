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
            if(!action.payload) {
                return state;
            }
            const currentItem: ITask = <ITask> action.payload;

            let updatedItems: ITask[] = state.items.map(item => {

                if(item.Id === currentItem.Id) {
                    return currentItem;
                } else {
                    return item;
                }

            });

            return {
                ...state,
                items: updatedItems
            };
        case ToDoActionTypes.ToDoActionsRemove:

            if((<ITask[]> action.payload).length === 0){
                return state;
            } else {

                const targetIds: number[] = (<ITask[]> action.payload).map(item=>item.Id);

                return {
                    ...state,
                    items: state.items.filter(item => {
                    return targetIds.indexOf(item.Id) === -1;

                    })
                }
            }

        default:
            return state;

    }
}