import { Component, OnInit, OnDestroy } from '@angular/core';
import { SobreService } from './../../shared/services/sobre.service';
import { Sobre } from "./../../shared/models/sobre.model"
import { Subscription } from 'rxjs';

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
      if (this.sobre['imagem'].length > 0) {
        this.hasImage = true
      }
    }, err => {
      this.statusResponse = err.status
      this.messageApi = err.body['message']
      this.isLoading = false
    })
  }
}
