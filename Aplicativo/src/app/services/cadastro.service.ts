import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { URLBASE } from "../config/api.config";
import { Cadastro } from "../models/cadastro";

@Injectable()
export class CadastroService {

    constructor(public HttpClient: HttpClient) { }

    get(cadastro: Cadastro) {
        var url = URLBASE.urlBase + "/route.tbcadastro.php?id_ca=" + cadastro.id_ca;
        return this.HttpClient.get<Cadastro[]>(url);
    }
}