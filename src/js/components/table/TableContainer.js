import {connect} from "react-redux";
import Table from './Table'
import {resetTable, updateTable} from '../../actions/updateTableAction'

const mapStateToProps = state => {
    return {
        points: state.pointsReducer,
        table: state.tableReducer
    }
};

const mapDispatchToProps = dispatch => {
    return {
        updateTable: (points) => dispatch(updateTable(points)),
        resetTable: () => dispatch(resetTable())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Table)