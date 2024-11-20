import VehicleRespository from "./VehicleRepository";
import VehiclePassesRepository from "./VehiclePassesRepository";
import VehicleHistoryRespository from "./VehicleHistoryRepository";


const repositories = {
  vehicle: VehicleRespository,
  myVehiclePasses: VehiclePassesRepository,
  history:VehicleHistoryRespository,
};

export const RepositoryFactory = {
  get: (name) => repositories[name],  
};
