import {ITasksWrapperProps, TasksWrapper} from "../Pure/TasksWrapper";
import * as React from "react";
import {ApplicationState} from "../../MainStore";
import {connect} from "react-redux";


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

export  const TasksWrapperConnected = connect(mapStateToProps)(_TasksWrapperConnected);