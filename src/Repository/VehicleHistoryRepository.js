import Repository from "./Repository";
const ELIGIBILITY_STATUS = "/vehiclehistory";
export default {
  getHistory() {
    return Repository.get(`${ELIGIBILITY_STATUS}`);
  },
};
