import { Component, OnInit, OnDestroy } from '@angular/core'
import { SobreService } from '../../shared/services/sobre.service'
import { Sobre } from '../../shared/models/sobre.model'
import { Subscription } from "rxjs"
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit, OnDestroy {

  public sobre: Sobre[]

  private httpReq: Subscription
  isLoading: boolean
  messageApi: string
  statusResponse: number
  hasImage: boolean = false

  constructor(private _service: SobreService) { }

  ngOnInit() {
    this.getSobreWithParams()
  }

  ngOnDestroy() {
    this.httpReq.unsubscribe()
  }

  getSobreWithParams() {
    this.isLoading = true
    this.httpReq = this._service.getSobreWithParams().subscribe(response => {
      this.statusResponse = response.status
      this.messageApi = response.body['message']
      this.sobre = response.body['data']
      this.isLoading = false
    }, err => {
      this.statusResponse = err.status
      this.messageApi = err.body['message']
      this.isLoading = false
    })
  }
}