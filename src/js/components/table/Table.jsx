import React from 'react';

export default class Table extends React.Component {

    updateTable() {
        const {points} = this.props;
        Object.keys(points).forEach(key => {
            this.props.updateTable(points[key].team, points[key].points, points[key].goalDifference);
        });
    }

    resetTable() {
        this.props.resetTable();
    }

    render() {
        const sortedTable = [];
        for (const key in this.props.table) {
            const team = this.props.table[key];
            sortedTable.push({
                name: team.name,
                matchesPlayed: team.matchesPlayed,
                goalDifference: team.goalDifference,
                points: team.points
            });
        }

        sortedTable.sort((team1, team2) => {
            return team2.points - team1.points
        });

        return (
            <div className={'table-container'}>
                <div className={'table'}>
                    <table>
                        <tbody>
                        <tr>
                            <th>Rank</th>
                            <th>Club</th>
                            <th>MP</th>
                            <th>GD</th>
                            <th>Points</th>
                        </tr>
                        {
                            sortedTable.map((team, index) => (
                                <tr key={index}>
                                    <td>{index + 3}</td>
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