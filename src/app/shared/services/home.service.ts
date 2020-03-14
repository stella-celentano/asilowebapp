import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AsiloWebApi } from 'src/app/app.api';
import { Noticia } from '../models/noticia.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getNoticiasThreeResults(): Observable<Noticia[]> {
    return this.http.get<Noticia[]>(`${AsiloWebApi}/noticia-three-results`)
  }
}
