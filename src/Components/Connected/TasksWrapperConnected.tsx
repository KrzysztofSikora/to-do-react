import {ITasksWrapperProps, TasksWrapper, ITasksWrapperMethods} from "../Pure/TasksWrapper";
import * as React from "react";
import {ApplicationState} from "../../MainStore";
import {connect} from "react-redux";
import {ToDoActions} from "../Actions/ToDoActions";
import {ITask} from "../../Models/ITask";


class _TasksWrapperConnected extends React.Component<ITasksWrapperProps> {
    public render() {
        return <TasksWrapper {...this.props} />;
    }
}

const mapStateToProps = (state: ApplicationState): ITasksWrapperProps  => {
    return {
        tasks: state.ToDoReducer.items
    };
};

const mapDispatchToProps = (dispatch: Function): ITasksWrapperMethods => {
    return {
        onUpdated: (id: number, task: ITask) => dispatch(ToDoActions.Update(id, task)),
        onDeleted: (id: number,) => dispatch(ToDoActions.Delete(id))
    }
}

export  const TasksWrapperConnected = connect(mapStateToProps, mapDispatchToProps)(_TasksWrapperConnected);