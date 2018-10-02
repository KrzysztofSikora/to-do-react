import {ITask} from "../../Models/ITask";
import {LocalStorageService} from "../../Services/LocalStorage";

export enum ToDoActionTypes {
    ToDoActionsGetAll = 'ToDoActionsGetAll',
    ToDoActionsGet = 'ToDoActionsGet',
    ToDoActionsUpdate = 'ToDoActionsUpdate',
    ToDoActionsRemove = 'ToDoActionsRemove'
}

export interface IToDoActions {
    type: ToDoActionTypes,
    payload?: ITask[] | ITask
}

export class ToDoActions {
    public static GetAll(): IToDoActions {
        const service: LocalStorageService = new LocalStorageService();
        return {
            type: ToDoActionTypes.ToDoActionsGetAll,
            payload: service.getAll()
        };
    }

    public static Update(id: number, task: ITask): IToDoActions {
        const service: LocalStorageService = new LocalStorageService();
        let updatedTask: ITask | undefined = service.update(id, task);


        return {
            type: ToDoActionTypes.ToDoActionsUpdate,
            payload: updatedTask
        };
    }

    public static Delete(id: number): IToDoActions {
        const service: LocalStorageService = new LocalStorageService();
        let deletedTask: ITask[] = service.remove(id);

        return {
            type: ToDoActionTypes.ToDoActionsRemove,
            payload: deletedTask
        };
    }
}