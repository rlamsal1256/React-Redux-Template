import React from 'react';

export default class Table extends React.Component {

    updateTable() {
        this.props.updateTable(this.props.points);
    }

    resetTable() {
        this.props.resetTable();
    }

    findShift(teamName, prevTable, sortedTable) {
        let prevRanking = 0;
        let newRanking = 0;

        for (const key in prevTable) {
            if (prevTable.hasOwnProperty(key)) {
                const team = prevTable[key];
                if (team.name === teamName) {
                    break
                }
                prevRanking++;
            }
        }

        for (const key in sortedTable) {
            if (sortedTable.hasOwnProperty(key)) {
                const team = sortedTable[key];
                if (team.name === teamName) {
                    break
                }
                newRanking++;
            }
        }

        let result = 'no-shift';

        if (newRanking < prevRanking) {
            result = 'up-shift';
        } else if (newRanking > prevRanking) {
            result = 'down-shift';
        }

        return result;
    }

    render() {
        const sortedTable = [];
        for (const key in this.props.table) {
            if (this.props.table.hasOwnProperty(key)){
                const team = this.props.table[key];
                sortedTable.push({
                    name: team.name,
                    matchesPlayed: team.matchesPlayed,
                    goalDifference: team.goalDifference,
                    points: team.points
                });
            }
        }

        sortedTable.sort((team1, team2) => {
            return team2.points - team1.points
        });

        const Shift = (props) => {
            const shift = this.findShift(props.teamName, this.props.table, sortedTable);
            return (
                <div className={shift}/>
            )
        };

        return (
            <div className={'table-container'}>
                <div className={'table'}>
                    <table>
                        <tbody>
                        <tr>
                            <th>Rank</th>
                            <th>Shift</th>
                            <th>Club</th>
                            <th>MP</th>
                            <th>GD</th>
                            <th>Points</th>
                        </tr>
                        {
                            sortedTable.map((team, index) => (
                                <tr key={index}>
                                    <td>{index + 3}</td>
                                    <td><Shift teamName={team.name}/></td>
                                    <td>{team.name}</td>
                                    <td>{team.matchesPlayed}</td>
                                    <td>{team.goalDifference}</td>
                                    <td>{team.points}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
                <div className={'table-btn-container'}>
                    <button
                        className={'table-btn'}
                        onClick={() => this.updateTable()}
                    >
                        Update Table
                    </button>
                </div>
                <div className={'table-btn-container'}>
                    <button
                        className={'table-btn'}
                        onClick={() => this.resetTable()}
                    >
                        Reset Table
                    </button>
                </div>
            </div>
        )
    }
}