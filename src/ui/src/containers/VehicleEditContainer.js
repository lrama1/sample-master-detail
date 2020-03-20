import {connect} from 'react-redux';
import {addTrim, editTrim, editVehicle, removeTrim, saveVehicle} from '../actions/vehicle';
import VehicleEdit from '../components/VehicleEdit';

export const mapStateToProps = (state) => {
    console.log(state);
    return {
        selectedVehicle: state.vehicle
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        onEditVehicle(event){
            const {name, value} = event.target;
            dispatch(editVehicle([name], value))
        },
        onSaveVehicle(url, vehicle){
            dispatch(saveVehicle(url, vehicle))
        },
        onAddTrim(){
            dispatch(addTrim())
        },
        onEditTrim(event, index){
            const {name, value} = event.target;
            dispatch(editTrim(name, value, index))
        },
        onRemoveTrim(index){
            dispatch(removeTrim(index))
        }
    }
}
export default  connect(mapStateToProps, mapDispatchToProps)(VehicleEdit);