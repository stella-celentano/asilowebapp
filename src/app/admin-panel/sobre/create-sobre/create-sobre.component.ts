import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { SobreService } from 'src/app/shared/services/sobre.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Sobre } from 'src/app/shared/models/sobre.model';

@Component({
  selector: 'app-create-sobre',
  templateUrl: './create-sobre.component.html',
  styleUrls: ['./create-sobre.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateSobreComponent implements OnInit, OnDestroy {

  private httpReq: Subscription

  sobreForm: FormGroup
  submitted: boolean = false

  total: any
  isLoading: boolean

  constructor(
    private r: Router,
    private _service: SobreService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.r.routeReuseStrategy.shouldReuseRoute = () => false

    this.getSobreWithParams()

    this.sobreForm = this.fb.group({
      titulo: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      descricao: [null, Validators.required],
      imagem: [null],
      ordenacao: [null],
      status: [true]
    });
  }
  
  getSobreWithParams() {
    this.httpReq = this._service.getSobreWithParams().subscribe(response => {
      this.total = response.body['count']
    })
  }

  editorConfig = {
    editable: true,
    spellcheck: false,
    toolbar: [ ['bold', 'italic', 'underline'],['undo', 'redo']],
    minHeight: '5rem',
    placeholder: 'Informe a descrição',
    translate: 'no'
  };

  postSobre(form: Sobre){
    this.submitted = true
    form.ordenacao = this.total + 1
    this._service.postSobre(form).subscribe(res =>{
      this.r.navigate(['/admin/sobre'])
    })
  }

  hasError(field: string) {
    return this.sobreForm.get(field).errors;
  }

  ngOnDestroy() {
    if (this.httpReq) {
      this.httpReq.unsubscribe()
    }
  }

}
