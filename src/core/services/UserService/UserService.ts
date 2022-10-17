import { UserAPI, IUserAPI } from '../../api/user';
import { User, IUserService } from './types';

class UserService implements IUserService {

    api;

    constructor(api: IUserAPI) {
        this.api = api;
    }

    getUser(id: string) {
        return UserAPI.getUser(id) as User;
    }
}

export default UserService;