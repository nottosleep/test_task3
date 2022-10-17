import DashboardStore from './DashboardStore';

class RootStore {
    dashboardStore;

    constructor({ dashboard }: any) {
        this.dashboardStore = new DashboardStore(dashboard.data)
    }
}

export default RootStore;