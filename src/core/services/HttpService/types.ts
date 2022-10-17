import { Axios } from 'axios';

export type Data = {
    data: any
} & Response;

export interface IHttpService {
    httpClient: Axios,
    _get(url: string): void,
}