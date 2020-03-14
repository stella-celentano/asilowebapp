import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { AsiloWebApi } from '../../app.api'
import { Sobre } from '../models/sobre.model'

@Injectable()
export class SobreService {

  constructor(private http: HttpClient) { }

  getSobre(): Observable<Sobre> {
    return this.http.get<Sobre>(`${AsiloWebApi}/quemSomos`)
  }
}
