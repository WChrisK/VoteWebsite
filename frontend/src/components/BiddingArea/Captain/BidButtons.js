import React from 'react';
import Button from "@material-ui/core/Button";
import './BidButtons.css';

const BID_AMOUNTS = [
    [30, 29, 28, 27, 26],
    [25, 24, 23, 22, 21],
    [20, 19, 18, 17, 16],
    [15, 14, 13, 12, 11],
    [10, 9, 8, 7, 6],
    [5, 4, 3, 2, 1]
];

class BidButtons extends React.Component {
    render() {
        return <div className={"bidding-buttons"}>
            { BID_AMOUNTS.map(bidArray => {
                return (<div className={"button-spacer"}>
                    { bidArray.map(amount => {
                        let isDisabled = amount > 23;
                        return <span className={"button-spacer"}>
                            <Button variant="contained" size="large" color="primary" className={"bid-button"} disabled={isDisabled}>
                                ${amount}
                            </Button>
                        </span>;
                    }) }
                </div>);
            }) }
        </div>
    }
}

export default BidButtons;
