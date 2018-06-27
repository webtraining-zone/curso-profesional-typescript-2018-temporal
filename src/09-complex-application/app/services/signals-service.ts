import {HttpClient} from "../utils/http-client";
import {AxiosPromise} from "axios";
import {SignalsResponse} from "../models/signals-response";
import {ApiConfig} from "../config/api-config";

export class SignalsService {
    private serviceURL: string = `${ApiConfig.BASE_URL}:${ApiConfig.BASE_PORT}/traffic-signals/v1/signals`;
    private _http: HttpClient;

    constructor() {
        this._http = new HttpClient();
    }

    getSignals(): AxiosPromise<SignalsResponse> {
        return this._http.get(this.serviceURL);
    }
}