import * as React from 'react';
import './App.css';

import { TasksWrapper } from "./Components/Pure/TasksWrapper";

class App extends React.Component {
  public render() {
    return (
      <TasksWrapper/>
    );
  }
}

export default App;
