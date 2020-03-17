import { Component, OnInit, OnDestroy } from '@angular/core'
import { SobreService } from '../../shared/services/sobre.service'
import { Sobre } from '../../shared/models/sobre.model'
import { Subscription } from "rxjs"
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit, OnDestroy {

  sobre: Sobre[]

  private httpReq: Subscription
  isLoading: boolean
  messageApi: string
  statusResponse: number
  hasImage: boolean = false
  total: number
  p: number
  limit: number

  constructor(
    private r: Router,
    private _service: SobreService
  ) { }

  ngOnInit() {
    this.r.routeReuseStrategy.shouldReuseRoute = () => false

    this._service.params = this._service.params.set('columnSort', 'ordenacao')
    this._service.params = this._service.params.set('valueSort', 'ascending')
    this._service.params = this._service.params.set('limit', '10')
    this._service.params = this._service.params.set('page', '1')

    this.getSobreWithParams()
  }

  ngOnDestroy() {
    if (this.httpReq) {
      this.httpReq.unsubscribe()
    }
  }

  getSobreWithParams() {
      this.isLoading = true
      this.httpReq = this._service.getSobreWithParams().subscribe(response => {
        this.statusResponse = response.status
        this.messageApi = response.body['message']
        this.sobre = response.body['data']
        this.p = response.body['page']
        this.total = response.body['count']
        this.limit = response.body['limit']
        this.isLoading = false
        // if (this.sobre['imagem'].length > 0) {
        //   this.hasImage = true
        // }
      }, err => {
        this.statusResponse = err.status
        this.messageApi = err.body['message']
        this.isLoading = false
      })
    }
  }