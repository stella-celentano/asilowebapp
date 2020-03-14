import { Component, OnInit } from '@angular/core'
import { SobreService } from '../../shared/services/sobre.service'
import { Sobre } from '../../shared/models/sobre.model'
import { Subscription } from "rxjs"

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  public sobre: Sobre

  constructor(private ss: SobreService) { }

  ngOnInit() {
    this.getSobre()
  }

  getSobre() {
    this.ss.getSobre().subscribe((sobre) => {
      this.sobre = sobre['data']
    })
  }
}