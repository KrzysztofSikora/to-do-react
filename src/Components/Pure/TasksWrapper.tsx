import * as React from 'react';
import {ITask} from "../../Models/ITask";
import {LocalStorageService} from "../../Services/LocalStorage";
import {TaskItem} from "./TaskItem";

interface ITasksWrapperState {
    tasks: ITask[];
}

const initialState: ITasksWrapperState = {
    tasks: []
}

export class TasksWrapper extends React.Component<{}, ITasksWrapperState> {

    public constructor(props:{}) {
        super(props);
        this.state = initialState;
    }

    public componentDidMount() {
        const service: LocalStorageService = new LocalStorageService();


        this.setState({
            tasks: service.get()
        });
    }

    public render() {
        return (
            <div>
                {this.state.tasks.length}
                {
                    this.state.tasks.map(task => {
                      return <TaskItem {...task} key={task.Id} />
                    })
                }
            </div>
        )
    }
}