import Repository from "./Repository";
const ELIGIBILITY_STATUS = "/vehilces";
export default {
  getVehicle() {
    return Repository.get(`${ELIGIBILITY_STATUS}`);
  },
};
