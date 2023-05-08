import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoginObservableService {
    private readonly criarUsuario: Subject<boolean> = new Subject;
    private readonly voltarUsuario: Subject<boolean> = new Subject;
    private readonly erroApi: Subject<boolean> = new Subject;


    public observableCriarUsuario(): Observable<boolean>{
        return this.criarUsuario.asObservable()
    }
    public nextCriarUsuario(exibir: boolean){
        return this.criarUsuario.next(exibir);
    }
    public observableVoltarUsuario(): Observable<boolean>{
        return this.voltarUsuario.asObservable()
    }
    public nextVoltarUsuario(exibir: boolean){
        return this.voltarUsuario.next(exibir);
    }

    public observableLogin(): Observable<boolean>{
        return this.erroApi.asObservable()
    }
    public nextLogin(exibir: boolean){
        return this.erroApi.next(exibir);
    }
}