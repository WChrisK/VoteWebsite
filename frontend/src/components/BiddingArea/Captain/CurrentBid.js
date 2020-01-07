import React from 'react';
import './CurrentBid.css';

class CurrentBid extends React.Component {
    render() {
        return <div className={"current-bid"}>
            <div className={"free-agent-name"}>Skullrush</div>
            <div className={"bidder-info"}>Tai for $12</div>
        </div>
    }
}

export default CurrentBid;
