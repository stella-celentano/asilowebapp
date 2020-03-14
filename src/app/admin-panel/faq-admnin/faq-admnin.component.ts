import { Component, OnInit } from '@angular/core';
import { FAQService } from './../../shared/services/faq.service'
import { FAQ } from "./../../shared/models/faq.model"
import { Subscription } from "rxjs"
import { Router } from "@angular/router"
import { FormGroup } from "@angular/forms"


@Component({
  selector: 'app-faq-admnin',
  templateUrl: './faq-admnin.component.html',
  styleUrls: ['./faq-admnin.component.css']
})
export class FaqAdmninComponent implements OnInit {

  private httpReq: Subscription

  faqs: FAQ[]

  // // Configuração da ordenação
  // key: string = 'ordenar';
  // reverse: boolean = false;
  // sort(key) {
  //     this.key = key;
  //     this.reverse = !this.reverse;
  // }


  keywordFilterForm: FormGroup

  isLoading: boolean = false
  messageApi: string
  statusResponse: number
  p: number
  total: number
  limit: number
  order: boolean = false

  constructor(
    private faqService: FAQService,
    private r: Router
  ) { }

  ngOnInit() {

    this.r.routeReuseStrategy.shouldReuseRoute = () => false

    this.faqService.params = this.faqService.params.set('order', 'descending')
    this.faqService.params = this.faqService.params.set('page', '1')

    this.getFAQWithParams()
  }

  // ngOnDestroy() {
  //   this.httpReq.unsubscribe()
  // }

  getFAQWithParams() {
    this.isLoading = true
    this.httpReq = this.faqService.getFAQWithParams().subscribe(response => {
      this.statusResponse = response.status
      this.messageApi = response.body['message']
      this.faqs = response.body['data']
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
    this.faqs = null
    this.faqService.params = this.faqService.params.set('page', page.toString())
    this.getFAQWithParams()
  }

  clearConditions() {
    this.faqs = null

    this.faqService.params = this.faqService.params.set('page', '1')

    this.order = false
    this.faqService.params = this.faqService.params.set('order', 'descending')

    this.getFAQWithParams()
  }
}
