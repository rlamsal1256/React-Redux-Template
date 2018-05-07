import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Table from './Table'
import {resetTable, updateTable} from '../../actions/updateTableAction'

const mapStateToProps = state => {
    return {
        points: state.pointsReducer,
        table: state.tableReducer
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        updateTable: updateTable,
        resetTable: resetTable
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Table)