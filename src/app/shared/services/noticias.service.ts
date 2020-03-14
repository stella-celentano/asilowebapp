import { Injectable } from "@angular/core"
import { HttpClient, HttpResponse, HttpParams } from "@angular/common/http"
import { Observable } from "rxjs"
import { AsiloWebApi } from "../../app.api"
import { Noticia } from "../models/noticia.model"

@Injectable()
export class NoticiasService {

    constructor(private http: HttpClient) { }

    params = new HttpParams()

    getNoticiasWithParams(): Observable<HttpResponse<Noticia[]>> {
        return this.http.get<Noticia[]>(`${AsiloWebApi}/noticia`, { params: this.params, observe: 'response' })
    }

}