import { Component, OnInit, Input } from '@angular/core';
import { Noticia } from "../../../shared/models/noticia.model"

@Component({
  selector: 'app-noticia-card',
  templateUrl: './noticia-card.component.html',
  styleUrls: ['./noticia-card.component.css']
})
export class NoticiaCardComponent implements OnInit {

  @Input() noticia: Noticia[]
  hasImage: boolean = false

  constructor() { }

  ngOnInit() {
    if (this.noticia['imagem'].length > 0) {
      this.hasImage = true
      this.noticia['imagem'] = this.noticia['imagem'][0]['src']
    }
  }

}
