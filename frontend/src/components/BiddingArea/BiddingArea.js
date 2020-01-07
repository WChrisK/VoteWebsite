import React from 'react';
import BidButtons from "./Captain/BidButtons";
import CurrentBid from "./Captain/CurrentBid";
import './BiddingArea.css';

class BiddingArea extends React.Component {
    render() {
        return <div className={"bidding-area"}>
            <CurrentBid/>
            {/*<CaptainInfos/>*/}
            <BidButtons/>
        </div>
    }
}

export default BiddingArea;
