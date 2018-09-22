import * as React from 'react';
import {ITask} from "../../Models/ITask";
import {LocalStorageService} from "../../Services/LocalStorage";




export class TaskItem extends React.Component <ITask, ITask> {


    constructor(props: ITask) {
        super(props);

        this.state = props;
    }


    public render() {
        return (
            <div>
                <input
                    type="checkbox"
                    checked={this.state.IsDone}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        const newState: ITask = {
                            ...this.state,
                            IsDone: event.target.checked
                        }

                        this.setState(newState)


                        const service: LocalStorageService = new LocalStorageService();
                        service.update(this.props.Id, newState);
                    }}
                />
                <p
                    onClick={(event)=> {
                        console.log(this.state)
                    }}>
                    {this.props.Name}</p>
            </div>
        );
    }
}