import { api } from './api';
import { Make, Model, Version, Vehicle } from '../types';

export class VehiclesService {
  static async getMakes(): Promise<Make[]> {
    return await api.get('Make');
  }

  static async getModels(id: number): Promise<Model[]> {
    return await api.get(`Model?MakeID=${id}`);
  }

  static async getVersions(id: number): Promise<Version[]> {
    return await api.get(`Version?ModelID=${id}`);
  }

  static async getVehicles(pageNumber: number): Promise<Vehicle[]> {
    return await api.get(`Vehicles?Page=${pageNumber}`);
  }
}
