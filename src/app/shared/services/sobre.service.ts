import { Injectable } from '@angular/core'
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'
import { AsiloWebApi } from '../../app.api'
import { Sobre } from '../models/sobre.model'

@Injectable()
export class SobreService {

  constructor(private http: HttpClient) { }

  params = new HttpParams()

  getSobreWithParams(): Observable<HttpResponse<Sobre[]>> {
    return this.http.get<Sobre[]>(`${AsiloWebApi}/quemSomos`, { params: this.params, observe: 'response' })
  }
  
}
