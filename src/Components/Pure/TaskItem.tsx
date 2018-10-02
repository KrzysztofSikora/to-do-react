import * as React from 'react';
import {ITask} from "../../Models/ITask";
import './TaskItem.css';

export interface ITasksItemProps {
    item: ITask;
}

export interface ITaskItemMethods {
    onUpdate?: (id: number, task: ITask) => void;
    onDelete?: (id: number) => void;
}

export class TaskItem extends React.Component <ITasksItemProps & ITaskItemMethods> {


    constructor(props: ITasksItemProps & ITaskItemMethods) {
        super(props);

        this.state = props;
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }


    public render() {
        return (
            <div className="task-item">
                <input
                    type="checkbox"
                    checked={this.props.item.IsDone}
                    onChange={this.handleUpdate}
                />
                <p>{this.props.item.Name}</p>
                <p>{this.props.item.CreatedAt}</p>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        );
    }

    private handleDelete(event: React.MouseEvent<HTMLButtonElement>) {
        if(!this.props.onDelete) {
            return;
        } else {
            this.props.onDelete(this.props.item.Id);
        }
    }

    private handleUpdate(event: React.ChangeEvent<HTMLInputElement>) {
        if(this.props.onUpdate) {
            this.props.onUpdate(this.props.item.Id, {
                ...this.props.item,
                IsDone: event.target.checked
            });
        }

    }
}