import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Filtro } from "src/app/shared/model/filtro-cliente.model";

@Injectable({
    providedIn: 'root'
})

export class ClientesObservableService{
    private readonly clientes: Subject<Filtro> = new Subject();

    public observableCliente(): Observable<any> {
        return this.clientes.asObservable();
    }

    public nextCliente(filtro: Filtro){
        return this.clientes.next(filtro)
    }
}