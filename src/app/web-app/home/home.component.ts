import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from '../services/home.service';
import { Noticia } from '../noticias/noticia.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public noticias: Noticia[];

  private components: Subscription

  constructor(private _service: HomeService) { }

  ngOnInit() {
    this.getNoticias();
  }

  ngOnDestroy() {
    this.components.unsubscribe();
  }

  getNoticias() {
    this.components = this._service.getNoticiasThreeResults().subscribe(result => {
      this.noticias = result['data'];
      console.log(result['data'])
    },
      error => console.log("Erro ao carregar as notícias: ", error)
    )
  }

  showEllipsisInTheText(text: string, limit: number): boolean {
    return text.length > limit;
  }

}