import mockData from '../../__mock__/DASHBOARD.json';
import { DashboardData, DashboardType } from '../services/DashboardService/types';
import { HttpService } from '../services/HttpService';

export interface IDashboardAPI {
    getDashboardData(dashboardType: DashboardType): Array<DashboardData>
}

export const DashboardAPI: IDashboardAPI = {
    getDashboardData(dashboardType) {
        // return HttpService._get('');
        return mockData.data;
    }
};