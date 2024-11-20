
import Repository from "./Repository";
const HL7DATA = "/validpasses";


export default {
  getPasses() {
    return Repository.get(`${HL7DATA}`);
  },
  createPasses(payload) {
    return Repository.post(`${HL7DATA}`, payload);
  },
  updatePasses(payload, _id) {
     return Repository.put(`${HL7DATA}/${_id}`, payload);
  },
  deletePasses(_id) {
    return Repository.delete(`${HL7DATA}/${_id}`);
  },
  getPassesById(_id) {
    return Repository.get(`${HL7DATA}/${_id}`);
  }
}; 