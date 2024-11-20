import { RepositoryFactory } from "../../Repository/RepositoryFactory";
let VehiclePassesRespository = RepositoryFactory.get("myVehiclePasses");

// Add Loader
export const myAddLoader = (val) => async (dispatch) => {
  dispatch({
    type: "GET_ADD_LOADER",
    payload: val,
  });
};

//My Get Loader
export const myGetLoader = (val) => async (dispatch) => {
  dispatch({
    type: "MY_GET_LOADER",
    payload: val,
  });
};

// Users Loader
export const getEditLoader = (val) => async (dispatch) => {
  dispatch({
    type: "GET_EDIT_LOADER",
    payload: val,
  });
};
// Delete 
export const getDeleteLoader = (val) => async (dispatch) => {
  dispatch({
    type: "GET_DELETE_LOADER",
    payload: val,
  })
}

//MYUpdate Loader
export const myUpdateLoader = (val) => async (dispatch) => {
  dispatch({
    type: "MY_UPDATE_LOADER",
    payload: val,
  });
};


//Create
export const createPasses = (payload) => async (dispatch) => {
  dispatch(myAddLoader(true));
  try {
    const {data} = await VehiclePassesRespository.createPasses(payload);
    console.log(data, "response==")
    if (data.success) {
  
      dispatch({ type: "CREATE_VEHICLE_PASSES" });
       alert("Data Added Successfully! ");
       dispatch(getPasses());
       dispatch(myAddLoader(false));
    } else {
        dispatch(myAddLoader(false));
    }
   
  } catch (error) {
    dispatch(myAddLoader(false));
    alert(error.message);
  }
};
//GET
export const getPasses = () => async (dispatch) => {
  dispatch(myGetLoader(true));
  try {
    const {data} = await VehiclePassesRespository.getPasses();
    if (data.success) { 
       dispatch(myGetLoader(false));
       dispatch({ type: "GET_VEHICLE_PASSES", payload: data.data });
    } else {
      dispatch(myGetLoader(false));
    }
   
  } catch (error) {
    dispatch(myGetLoader(false));
    alert(error.message);
  }
};

//UPDATE
export const updatePasses = (payload, id,onSucess) => async (dispatch) => {
  dispatch(myUpdateLoader(true));
  try {
    const {data} = await VehiclePassesRespository.updatePasses(payload, id);
    if (data.success) {
       alert("Data Updated Successfully");
       dispatch({ type: "UPDATE_VEHICLE_PASSES" });
       dispatch(getPasses());
      dispatch(myUpdateLoader(false));
      onSucess();
    } else {
      dispatch(myUpdateLoader(false));
    }
  } catch (error) {
    alert("Unfortunately data is not updated! ", error.message);
    dispatch(myUpdateLoader(false));
  }
};

//Delete
export const deletePasses = (id) => async (dispatch) => {
   dispatch(getDeleteLoader(true));
  try {
    const {data} = await VehiclePassesRespository.deletePasses(id);
    if (data.success) {
      alert("Data is deleted Successfully");
      dispatch({ type: "DELETE_VEHICLE_PASSES" });
      dispatch(getPasses());
      dispatch(getDeleteLoader(false));
    } else {
       dispatch(getDeleteLoader(false));
    }
    
  } catch (error) {
    alert("unfortunately data is not deleted", error.message);
    dispatch(getDeleteLoader(false));
  }
};

// LOADER
