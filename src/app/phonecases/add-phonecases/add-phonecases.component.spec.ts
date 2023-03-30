import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPhonecasesComponent } from './add-phonecases.component';

describe('AddPhonecasesComponent', () => {
  let component: AddPhonecasesComponent;
  let fixture: ComponentFixture<AddPhonecasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPhonecasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPhonecasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
