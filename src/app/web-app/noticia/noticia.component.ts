import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { NoticiaService } from "../../shared/services/noticia.service"
import { Subscription } from "rxjs"
import { Noticia } from "../../shared/models/noticia.model"

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit, OnDestroy {

  //Dataset
  noticia: Noticia

  //Control Variables
  private httpReq: Subscription
  isLoading: boolean
  messageApi: string
  statusResponse: number
  hasImage: boolean = false
  hasMultipleImages: boolean = false

  constructor(
    private _service: NoticiaService,
    private ar: ActivatedRoute
  ) { }

  ngOnInit() {
    const titulo: string = this.ar.snapshot.params['title']

    this.getNoticiaByTitle(titulo)
  }

  ngOnDestroy() {
    this.httpReq.unsubscribe()
  }

  getNoticiaByTitle(title: string) {
    this.isLoading = true
    this.httpReq = this._service.getNoticiaByTitle(title).subscribe(response => {
      this.statusResponse = response.status
      this.messageApi = response.body['message']
      this.noticia = response.body['data']
      this.isLoading = false
      if (this.noticia.imagem.length > 0) {
        this.hasImage = true
        if (this.noticia.imagem.length > 1) {
          this.hasMultipleImages = true
        }
      }
    }, err => {
      this.statusResponse = err.status
      this.messageApi = err.body['message']
      this.isLoading = false
    })
  }

}
