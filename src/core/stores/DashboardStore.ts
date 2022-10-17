import { action, observable } from 'mobx';
import { DashboardData } from '../services/DashboardService/types';

class DashboardStore {
    @observable
    data: Array<DashboardData>;

    constructor(data: Array<DashboardData>) {
        this.data = data;
    }

    @action
    addData(data: DashboardData) {
        this.data = [...this.data, data]
    }
}

export default DashboardStore;