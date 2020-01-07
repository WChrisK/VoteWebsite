import React from 'react';
import Header from "./components/Header";
import Logs from "./components/Logs";
import Voting from "./components/Voting";
import './App.css';

class App extends React.Component {
    render() {
        return <React.Fragment>
            <Header/>
            <Voting/>
            <Logs/>
        </React.Fragment>;
    }
}

export default App;
