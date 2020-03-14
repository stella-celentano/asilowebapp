import { Component, OnInit } from '@angular/core';
import { NoticiasService } from './../../shared/services/noticias.service';
import { Router } from '@angular/router';
import { Noticia } from 'src/app/shared/models/noticia.model';
import { Subscription } from 'rxjs';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  private httpReq: Subscription

  noticias: Noticia[]

  //Control Variables
  isLoading: boolean = false
  messageApi: string
  statusResponse: number
  p: number
  total: number
  limit: number
  filterKeyword: boolean = false
  order: boolean = false
  ordenacao: string = 'titulo'
  reverseTitulo: boolean = false;
  reverseDate: boolean = false;
  reverseStatus: boolean = false;
  sortedCollection: any[];
  collection: Noticia[]

  constructor(
    private orderPipe: OrderPipe,
    private _service: NoticiasService,
    private r: Router,
  ) {
    this.sortedCollection = orderPipe.transform(this.collection, 'titulo');
  }

  ngOnInit() {
    this.r.routeReuseStrategy.shouldReuseRoute = () => false

    this.SetarParametrosOrdenacao('titulo', 'ascending')
    this._service.params = this._service.params.set('page', '1')
    this._service.params = this._service.params.set('limit', '10')

    this.getNoticiasWithParams()
  }


  getNoticiasWithParams() {
    this.isLoading = true
    this.httpReq = this._service.getNoticiasWithParams().subscribe(response => {
      this.statusResponse = response.status
      this.messageApi = response.body['message']
      this.noticias = response.body['data']
      this.p = response.body['page']
      this.total = response.body['count']
      this.limit = response.body['limit']
      this.isLoading = false
    }, err => {
      this.statusResponse = err.status
      this.messageApi = err.error['message']
      this.isLoading = false
    })
  }

  getPage(page: number) {
    this.noticias = null
    this._service.params = this._service.params.set('page', page.toString())
    this.getNoticiasWithParams()
  }

  setOrder(value: string) {
    if (this.ordenacao == 'titulo') {

      this.reverseDate = false;
      this.reverseStatus = false;

      if (this.reverseTitulo == true) {
        this.SetarParametrosOrdenacao(this.ordenacao, 'ascending')
        this.getNoticiasWithParams()
      } else if (this.reverseTitulo == false) {
        this.SetarParametrosOrdenacao(this.ordenacao, 'descending')
        this.getNoticiasWithParams()
      }
      if (this.ordenacao === value) {
        this.reverseTitulo = !this.reverseTitulo;
      }
    } else if (this.ordenacao == 'date') {

      this.reverseTitulo = false;
      this.reverseStatus = false;

      if (this.reverseDate == true) {
        this.SetarParametrosOrdenacao(this.ordenacao, 'ascending')
        this.getNoticiasWithParams()
      } else if (this.reverseTitulo == false) {
        this.SetarParametrosOrdenacao(this.ordenacao, 'descending')
        this.getNoticiasWithParams()
      }
      if (this.ordenacao === value) {
        this.reverseDate = !this.reverseDate;
      }
    } else if (this.ordenacao == 'status') {

      this.reverseTitulo = false;
      this.reverseDate = false;

      if (this.reverseStatus == true) {
        this.SetarParametrosOrdenacao(this.ordenacao, 'ascending')
        this.getNoticiasWithParams()
      } else if (this.reverseStatus == false) {
        this.SetarParametrosOrdenacao(this.ordenacao, 'descending')
        this.getNoticiasWithParams()
      }
      if (this.ordenacao === value) {
        this.reverseStatus = !this.reverseStatus;
      }
    }
    this.ordenacao = value;
  }

  SetarParametrosOrdenacao(columnSort: string, valueSort: string) {
    this._service.params = this._service.params.set('columnSort', columnSort)
    this._service.params = this._service.params.set('valueSort', valueSort)
  }
}
