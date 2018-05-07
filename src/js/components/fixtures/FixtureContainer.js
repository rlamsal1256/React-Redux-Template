import {updatePoints} from "../../actions/updatePointsAction";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Fixture from './Fixture'


const mapStateToProps = state => {
    return {
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        updatePoints: updatePoints
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Fixture)