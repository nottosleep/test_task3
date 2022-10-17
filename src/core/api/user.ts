import mockData from '../../__mock__/USER.json';
import { User } from '../services/UserService/types';
import { HttpService } from '../services/HttpService';

export interface IUserAPI {
	getUser(id: string): User | null
}

export const UserAPI: IUserAPI = {
	getUser(id) {
		// return HttpService._get('');
		return mockData;
	}
};