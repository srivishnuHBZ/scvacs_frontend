
const initialState = {
  myVehicle: [],
  viewVehicleLoader: false
}

const vehicleReducer = (state = initialState, action) => {
    switch (action.type) {
      case "VEHICLE_ACTION":
        return {
          ...state,
          myVehicle: action.payload,
        };
      case "VIEW_VEHICLE_LOADER":
        return {      
          ...state,
          viewVehicleLoader: action.payload
        };      

      default:
        return state;
    }
}

export default vehicleReducer;
 
