import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Fixtures from './Fixtures'


const mapStateToProps = state => {
    return {
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Fixtures)