import { useState, useEffect } from 'react';
import { VehiclesService } from '../services/vehicles';
import { Model, Version, Make, Vehicle } from '../types';

interface UseHooks {
  makes: Make[];
  hasError: boolean;
  isLoading: boolean;
  getVehiclesModel: (id: number) => Promise<Model[]>;
  getVehiclesVersion: (id: number) => Promise<Version[]>;
  getAllVehicles: (pageNumber: number) => Promise<Vehicle[]>;
}

export const useVehicles = (): UseHooks => {
  const [makes, setMakes] = useState<Make[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  const getVehiclesModel = async (id: number) => {
    try {
      return await VehiclesService.getModels(id);
    } catch (e) {
      throw new Error(e);
    }
  };

  const getVehiclesVersion = async (id: number) => {
    try {
      return await VehiclesService.getVersions(id);
    } catch (e) {
      throw new Error(e);
    }
  };

  const getAllVehicles = async (pageNumber: number = 1) => {
    try {
      return await VehiclesService.getVehicles(pageNumber);
    } catch (e) {
      throw new Error(e);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const makesRes = await VehiclesService.getMakes();
        setMakes(makesRes);
      } catch (e) {
        setError(true);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return {
    makes,
    hasError,
    isLoading,
    getVehiclesModel,
    getVehiclesVersion,
    getAllVehicles
  };
};
