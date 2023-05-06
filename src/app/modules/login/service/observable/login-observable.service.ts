import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoginServicesObservableService {
    private readonly erroApi: Subject<boolean> = new Subject;

    public observableLogin(): Observable<boolean>{
        return this.erroApi.asObservable()
    }
    public nextLogin(exibir: boolean){
        return this.erroApi.next(exibir);
    }

}