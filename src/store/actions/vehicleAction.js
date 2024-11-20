import { RepositoryFactory } from "../../Repository/RepositoryFactory";
let VehicleRespository = RepositoryFactory.get("vehicle");

// GET Action

export const getVehicle = (payload) => async (dispatch) => {
  dispatch(ViewVehicleLoader(true));
  let { data } = await VehicleRespository.getVehicle();
  if (data.success) {
    dispatch(ViewVehicleLoader(false));
    dispatch({
      type: "VEHICLE_ACTION",
      payload: data.data,
    });
  } else {
    dispatch(ViewVehicleLoader(false));
    alert("Not getting data in VehicleAction");
  }
};

//View Vehicle Loader
export const ViewVehicleLoader = (val) => async (dispatch) => {
  dispatch({
    type: "VIEW_VEHICLE_LOADER",
    payload: val,
  });
};
