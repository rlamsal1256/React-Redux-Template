import React from 'react';
import FixtureContainer from './FixtureContainer';
import {fixturesList} from "../../constants/fixtureConstants";

export default class Fixtures extends React.Component {

    render() {
        return (
            <div className={'fixtures-container'}>
                <div className={'fixtures'}>
                    {
                        fixturesList.map((fixture, index) => (
                            <FixtureContainer key={index} fixture={fixture} />
                        ))
                    }
                </div>
            </div>
        )
    }
}