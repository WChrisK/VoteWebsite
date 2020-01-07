import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './Logs.css';

class Logs extends React.Component {
    render() {
        return <div className={"logs"}>
            <TableContainer component={Paper}>
                <Table size="small">
                    <TableBody>
                        <TableRow><TableCell align="left" className={"logging-cell"}>Caution bids $12 on Goblin.</TableCell></TableRow>
                        <TableRow><TableCell align="left" className={"logging-cell"}>Tai bids $8 on Goblin.</TableCell></TableRow>
                        <TableRow><TableCell align="left" className={"logging-cell"}>Water nominates Goblin for $1.</TableCell></TableRow>
                        <TableRow><TableCell align="left" className={"logging-cell"}>Bidding application started.</TableCell></TableRow>
                        <TableRow><TableCell align="left" className={"logging-cell"}>A captain (Water) has connected.</TableCell></TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    }
}

export default Logs;
