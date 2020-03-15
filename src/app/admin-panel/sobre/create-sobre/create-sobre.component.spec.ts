import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSobreComponent } from './create-sobre.component';

describe('CreateSobreComponent', () => {
  let component: CreateSobreComponent;
  let fixture: ComponentFixture<CreateSobreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSobreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
