import {setTemplate} from "../../actions/templateAction";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Main from './Main'


const mapStateToProps = state => {
    return {
        getTemplate: state.templateReducer
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setTemplate: setTemplate
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Main)