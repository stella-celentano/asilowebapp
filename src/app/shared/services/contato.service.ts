import { Contato } from '../models/contato.model';
import { Injectable } from "@angular/core"
import { HttpClient, HttpResponse } from "@angular/common/http"
import { Observable } from "rxjs"
import { AsiloWebApi } from "../../app.api"

@Injectable()
export class ContatoService {
    
    constructor(private http: HttpClient){}

    getContato(): Observable<Contato>{
        return this.http.get<Contato>(`${AsiloWebApi}/contato`)
    }

    putContato(id, contato): Observable<any>{
        return this.http.put<Contato>(`${AsiloWebApi}/contato/${id}`, contato)
    }

}