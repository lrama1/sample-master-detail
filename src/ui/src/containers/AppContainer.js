import {fetchAllVehicles} from '../actions/vehicle'

import {connect} from "react-redux";
import App from '../components/App'

const mapStateToProps = (state) => {
    console.log(state);
    return {
        vehicles: state.vehiclesReducer
    };
};
const mapDispatchToProps = (dispatch) => {
    return{
        fetchAllVehicles: (url) => dispatch(fetchAllVehicles(url))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)