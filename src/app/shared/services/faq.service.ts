import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from "@angular/common/http"
import { Observable } from "rxjs"
import { AsiloWebApi } from "../../app.api"
import {FAQ} from "../models/faq.model"


@Injectable({
  providedIn: 'root'
})
export class FAQService {

  constructor(private http: HttpClient) { }

  params = new HttpParams()

  // getFAQ(): Observable<FAQ[]>{
  //   return this.http.get<FAQ[]>(`${AsiloWebApi}/faq`,)
  // }

  getFAQWithParams(): Observable<HttpResponse<FAQ[]>>{
    return this.http.get<FAQ[]>(`${AsiloWebApi}/faq`, { params: this.params, observe: 'response' })
  }

}
