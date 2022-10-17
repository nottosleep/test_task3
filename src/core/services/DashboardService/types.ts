export type DashboardType = 'temperature';

export type DashboardData = {
    id: string,
    title: string,
    type: string,
    value: Array<number>
}

export interface IDashboardService {
    getDashboardData(type: DashboardType): Array<DashboardData>,
}