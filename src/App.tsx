import * as React from 'react';
import './App.css';

import {Provider} from "react-redux";
import {MainStore} from "./MainStore";
import {TasksWrapperConnected} from "./Components/Connected/TasksWrapperConnected";
import {ToDoActions} from "./Components/Actions/ToDoActions";


class App extends React.Component {

    public componentDidMount() {
        MainStore.dispatch(ToDoActions.GetAll());
    }

    public render() {
    return (
        <Provider store={MainStore}>
          <TasksWrapperConnected />
        </Provider>
    );
  }
}

export default App;
