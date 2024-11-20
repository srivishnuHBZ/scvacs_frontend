const initialState = {
    vehicleHistory: [],
    vehicleHistoryLoader: false

};

const vehicleHistoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case "VEHICLE_HISTORY_ACTION":
            return {
                ...state,
                vehicleHistory: action.payload,
            };
        case "VEHICLE_HISTORY_LOADER": 
            return {
                ...state,
                vehicleHistoryLoader:action.payload,
            }
        default:
            return state;
    }
};

export default vehicleHistoryReducer;