import { Component, OnInit, Input } from '@angular/core';
import { Transparencia } from "../../../shared/models/transparencia.model"

@Component({
  selector: 'app-documents-collapse',
  templateUrl: './documents-collapse.component.html',
  styleUrls: ['./documents-collapse.component.css']
})
export class DocumentsCollapseComponent implements OnInit {

  @Input() document: Transparencia

  constructor() { }

  ngOnInit() {
  }

}
