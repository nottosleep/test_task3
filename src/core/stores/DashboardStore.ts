import {action, computed, observable} from 'mobx';
import { DashboardData } from '../services/DashboardService/types';

class DashboardStore {
    @observable
    data: Array<DashboardData>;

    constructor(data: Array<DashboardData>) {
        this.data = data;
    }

    @computed
    getData() {
        return this.data
    }

    @action
    addData(data: DashboardData) {
        this.data = [...this.data, data]
    }

    // FIXME: for test only
    @action
    updateTestWSData(val: number) {
        console.log('internal temp: ', val)
        this.data = [...this.data].map((item, index) => {
            if (index === 0) {
                return {
                    ...item,
                    value: [...item.value, val]
                }
            } else {
                return item
            }
        })
    }
}

export default DashboardStore;