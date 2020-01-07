import React from 'react';
import Button from '@material-ui/core/Button';
import './FreeAgents.css';
import FreeAgent from "./FreeAgent";

class FreeAgents extends React.Component {
    render() {
        return <div className={"free-agents"}>
            <div className={"free-agents-header"}>Free agents</div>
            <div className={"free-agent-row"}><FreeAgent/><FreeAgent/></div>
            <div className={"free-agent-row"}><FreeAgent/><FreeAgent/></div>
            <div className={"free-agent-row"}><FreeAgent/><FreeAgent/></div>
            <div className={"free-agent-row"}><FreeAgent/><FreeAgent/></div>
            <div className={"free-agent-row"}><FreeAgent/><FreeAgent/></div>
            <div className={"free-agent-row"}><FreeAgent/><FreeAgent/></div>
            <div className={"free-agent-row"}><FreeAgent/><FreeAgent/></div>
            <div className={"free-agent-row"}><FreeAgent/><FreeAgent/></div>
            <div className={"free-agent-row"}><FreeAgent/><FreeAgent/></div>
            <div className={"free-agent-row"}><FreeAgent/><FreeAgent/></div>
            <div className={"free-agent-row"}><FreeAgent/><FreeAgent/></div>
            <div className={"free-agent-row"}><FreeAgent/><FreeAgent/></div>
        </div>
    }
}

export default FreeAgents;
