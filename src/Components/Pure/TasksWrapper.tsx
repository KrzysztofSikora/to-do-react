import * as React from 'react';
import {ITask} from "../../Models/ITask";
import {TaskItem} from "./TaskItem";


export interface ITasksWrapperProps {
    tasks: ITask[];
}

export interface ITasksWrapperMethods {
    onUpdated?: (id: number, task: ITask) => void;
    onDeleted?: (id: number) => void;
}
export class TasksWrapper extends React.Component<ITasksWrapperProps & ITasksWrapperMethods> {

    public render() {
        return (
            <div>
                {this.props.tasks.length}
                {
                    this.props.tasks.map(task => {
                      return (


                          <TaskItem item={task}
                                    key={task.Id}
                                    onUpdate={this.props.onUpdated}
                                    onDelete={this.props.onDeleted}
                          />
                      );
                    })
                }
            </div>
        )
    }
}