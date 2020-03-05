import { Component, OnInit } from '@angular/core';
import { FAQService } from './../services/faq.service'
import { FAQ } from './faq.model'


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {

  faqs: FAQ[]

  constructor(private faq: FAQService) { }

  ngOnInit() {
    this.getFAQ()
  }

  getFAQ() {
    this.faq.getFAQ().subscribe(faqs => {
      this.faqs = faqs['data'];
    })
  }
}
