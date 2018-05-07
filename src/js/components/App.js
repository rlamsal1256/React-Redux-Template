import React from 'react';
import TableContainer from "./table/TableContainer";
import FixturesContainer from "./fixtures/FixturesContainer";

class App extends React.Component {
    render() {
        return (
            <div className={'app-container'}>
                <h2 className={'header'}>
                    Predict Results for Top 4 Race
                </h2>
                <div className={' flex-container'}>
                    <FixturesContainer/>
                    <TableContainer/>
                </div>
            </div>
        );
    }
}

export default App