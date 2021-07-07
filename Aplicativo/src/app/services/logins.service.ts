import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { URLBASE } from "../config/api.config";
import { Logins } from "../models/logins";

@Injectable()
export class LoginsService {

    constructor(public HttpClient: HttpClient) { }

    get(logins: Logins) {
        var url = URLBASE.urlBase + "/route.tblogins.php?id_ca=" + logins.id_ca;
        return this.HttpClient.get<Logins[]>(url);
    }
}