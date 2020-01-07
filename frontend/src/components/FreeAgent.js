import React from 'react';
import Button from '@material-ui/core/Button';
import './FreeAgent.css';

class FreeAgent extends React.Component {
    render() {
        return <span className={"free-agent-button-div"}>
            <Button variant="contained" className={"free-agent-button"}>100% Newb</Button>
        </span>
    }
}

export default FreeAgent;
