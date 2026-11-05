import { api } from '../../api/client';

export interface HealthStatus {
  status: string;
  timestamp: string;
}

export const healthApi = {
  check: () => api.get<HealthStatus>('/health'),
};
