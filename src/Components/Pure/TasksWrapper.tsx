import * as React from 'react';
import {ITask} from "../../Models/ITask";
import {TaskItem} from "./TaskItem";


export interface ITasksWrapperProps {
    tasks: ITask[];
}

export class TasksWrapper extends React.Component<ITasksWrapperProps> {

    public render() {
        return (
            <div>
                {this.props.tasks.length}
                {
                    this.props.tasks.map(task => {
                      return <TaskItem {...task} key={task.Id} />
                    })
                }
            </div>
        )
    }
}