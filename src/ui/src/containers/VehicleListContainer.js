
import {connect} from 'react-redux';
import VehicleList from '../components/VehicleList'
import {fetchVehicle, fetchAllVehicles} from '../actions/vehicle';


export const mapStateToProps = (state) => {
    console.log(state);
    return {
        vehicles: state.vehicles.records,
        totalRecords: state.vehicles.totalRecords,
        first: state.vehicles.first
    };
};

export const mapDispatchToProps = (dispatch) => {
    return{
        fetchVehicle(url){
            dispatch(fetchVehicle(url))
        },
        fetchAllVehicles(url, first){
            dispatch(fetchAllVehicles(url, first))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VehicleList);