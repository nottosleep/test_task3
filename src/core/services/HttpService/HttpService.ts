import axios, { Axios } from 'axios';
import { IHttpService, Data } from './types';
import { API_HOST } from '../../constants';

class HttpService implements IHttpService {
    httpClient;

    constructor(httpClient: Axios) {
        this.httpClient = httpClient;
    }

    _get(url: string): void {
        //return this.httpClient.get(API_HOST + url)
    }
}

export default new HttpService(axios);