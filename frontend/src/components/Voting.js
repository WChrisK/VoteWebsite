import React from 'react';
import BiddingArea from "./BiddingArea";
import FreeAgents from "./FreeAgents";
import Teams from "./Teams";
import './Voting.css';

class Voting extends React.Component {
    render() {
        return <div className={"voting"}>
            <FreeAgents/>
            <BiddingArea/>
            <Teams/>
        </div>
    }
}

export default Voting;
