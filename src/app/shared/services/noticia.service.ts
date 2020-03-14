import { Injectable } from "@angular/core"
import { HttpClient, HttpResponse } from "@angular/common/http"
import { Observable } from "rxjs"
import { AsiloWebApi } from "../../app.api"
import { Noticia } from "../models/noticia.model"

@Injectable()
export class NoticiaService {

    constructor(private http: HttpClient) { }

    getNoticiaByTitle(title: string): Observable<HttpResponse<Noticia>> {
        return this.http.get<Noticia>(`${AsiloWebApi}/noticia/${title}`, { observe: 'response' })
    }
}