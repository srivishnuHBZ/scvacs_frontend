const initialState = {
  myVehiclePasses: [],
  myLoaderEdit: false,
  myLoaderDelete: false,
  myAddLoader: false,
  myLoaderUpdate: false,
  getLoader:false
};


// GET 
const vehiclePassesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_VEHICLE_PASSES":
      return {
        ...state,
        //  myVehiclePasses:action.payload,
      };
    case "GET_VEHICLE_PASSES":
      return {
        ...state,
        myVehiclePasses: action.payload,
      };
    case "UPDATE_VEHICLE_PASSES":
      return {
        ...state,
        // myVehiclePasses: action.payload,
      };
    case "DELETE_VEHICLE_PASSES":
      return {
        ...state,
        // myVehiclePasses: action.payload,
      };
    case "GET_EDIT_LOADER":
      return {
        ...state,
        myLoaderEdit: action.payload,
      };
    case "GET_ADD_LOADER":
      return {
        ...state,
        myAddLoader: action.payload
      };
    case "MY_UPDATE_LOADER":
      return {
        ...state,
        myLoaderUpdate:action.payload
      }
    case "GET_DELETE_LOADER":
      return {
      ...state,
        myLoaderDelete:action.payload
      }
    case "MY_GET_LOADER":
      return {
        ...state,
        getLoader:action.payload,
      };
    default:
      return state;
  }
};

export default vehiclePassesReducer;
