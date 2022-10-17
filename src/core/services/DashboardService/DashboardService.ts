import { DashboardAPI, IDashboardAPI } from '../../api/dashboard';
import { DashboardType, IDashboardService } from './types';

class DashboardService implements IDashboardService {

    api;

    constructor(api: IDashboardAPI) {
        this.api = api;
    }

    getDashboardData(type: DashboardType) {
        return DashboardAPI.getDashboardData(type);
    }
}

export default DashboardService;