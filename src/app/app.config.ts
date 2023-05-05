import { Injectable } from "@angular/core";
import { ListarAppConfig } from "./shared/model/listarAppConfig.model";
import * as appInit from "../config/config.json";
@Injectable()
export class AppConfig {
    static settings: ListarAppConfig;
    constructor(){}

    listaUrlApi(){
        AppConfig.settings = (appInit as any).default
    }
    
}