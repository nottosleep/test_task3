export type User = {
	id: string,
	name: string,
	roles: Array<string>,
	avatar: string
}

export interface IUserService {
	getUser(id: string): User,
}