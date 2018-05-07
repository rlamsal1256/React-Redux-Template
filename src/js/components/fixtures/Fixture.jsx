import React from 'react';
import {teamNames} from "../../constants/teamConstants";

export default class Fixture extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            homeTeamGoals: this.props.fixture.homeTeamGoals,
            awayTeamGoals: this.props.fixture.awayTeamGoals,
            winner: ''
        };

        this.winningTeam();
    }

    handleHomeTeamGoalsChange(e) {
        this.setState({
            homeTeamGoals: e.target.value
        }, () => this.winningTeam())
    }

    handleAwayTeamGoalsChange(e) {
        this.setState({
            awayTeamGoals: e.target.value
        }, () => this.winningTeam())
    }

    winningTeam(){
        const { homeTeam, awayTeam, fixtureId} = this.props.fixture;
        const { homeTeamGoals, awayTeamGoals} = this.state;

        if (homeTeamGoals > awayTeamGoals) {
            if (this.relevantTeam() === homeTeam) {
                this.props.updatePoints(fixtureId, homeTeam, 3, homeTeamGoals - awayTeamGoals);
            } else {
                this.props.updatePoints(fixtureId, awayTeam, 0, awayTeamGoals - homeTeamGoals);
            }
        } else if (this.state.homeTeamGoals < this.state.awayTeamGoals) {
            if (this.relevantTeam() === homeTeam) {
                this.props.updatePoints(fixtureId, homeTeam, 0, homeTeamGoals - awayTeamGoals);
            } else {
                this.props.updatePoints(fixtureId, awayTeam, 3, awayTeamGoals - homeTeamGoals);
            }
        } else {
            this.props.updatePoints(fixtureId, this.relevantTeam(), 1, 0);
        }
    }

    relevantTeam() {
        if (teamNames.includes(this.props.fixture.homeTeam)) {
            return this.props.fixture.homeTeam;
        }
        return this.props.fixture.awayTeam;
    }

    render() {
        return (
            <div className={'fixture-card'} >
                <div className={'fixture-card-home-team'}>{this.props.fixture.homeTeam}</div>
                <input className={'fixture-card-home-team-goals input-goal'}
                       value={this.state.homeTeamGoals}
                       onChange={(e) => this.handleHomeTeamGoalsChange(e)}
                />
                <div className={'fixture-card-divider'}>-</div>
                <input className={'fixture-card-away-team-goals input-goal'}
                       value={this.state.awayTeamGoals}
                       onChange={(e) => this.handleAwayTeamGoalsChange(e)}
                />
                <div className={'fixture-card-away-team'}>{this.props.fixture.awayTeam}</div>
            </div>
        )
    }
}