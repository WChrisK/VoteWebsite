import React from 'react';
import Team from "./Team";
import './Teams.css';

class Teams extends React.Component {
    render() {
        return <div className={"teams"}>
            <div>
                <Team/>
                <Team/>
            </div>
            <div>
                <Team/>
                <Team/>
            </div>
            <div>
                <Team/>
                <Team/>
            </div>
            <div>
                <Team/>
                <Team/>
            </div>
        </div>
    }
}

export default Teams;
