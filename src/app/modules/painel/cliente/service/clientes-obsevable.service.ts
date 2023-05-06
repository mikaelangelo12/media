import { Observable, Subject } from "rxjs";

export class ClientesObservableService{
    private readonly clientes: Subject<any> = new Subject();

    public observableCliente(): Observable<any> {
        return this.clientes.asObservable();
    }

    public nextCliente(cliente: any){
        return this.clientes.next(cliente)
    }
}