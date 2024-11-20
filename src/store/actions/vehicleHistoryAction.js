import { RepositoryFactory } from "../../Repository/RepositoryFactory";
let VehicleHistoryRepository = RepositoryFactory.get("history");

//GET HISTORY LOADER
export const VehicleHistoryLoader = (val) => async (dispatch) => {
  dispatch({
    type: "VEHICLE_HISTORY_LOADER",
    payload: val,
  });
};

// GET ACTION 
export const getHistory = (payload) => async (dispatch) => {
    dispatch(VehicleHistoryLoader(true)); 
    let { data } = await VehicleHistoryRepository.getHistory();
  
    if (data.success) {
        dispatch({
            type: "VEHICLE_HISTORY_ACTION",
            payload: data.data,
        });
        dispatch(VehicleHistoryLoader(false));
    } else {
        alert("data of getHistory => Action in VehicleHistoryAction is unsuccessful");
        dispatch(VehicleHistoryLoader(false));
    }
}

