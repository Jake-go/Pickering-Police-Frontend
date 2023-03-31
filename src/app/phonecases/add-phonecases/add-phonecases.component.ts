//add-phonecases.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Phonecases } from '../phonecases.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhonecasesService } from '../phonecases.service';
import { PoliceService } from 'src/app/police/police.service';
import { Police } from 'src/app/police/police.module';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-phonecases',
  templateUrl: './add-phonecases.component.html',
  styleUrls: ['./add-phonecases.component.css']
})
export class AddPhonecasesComponent implements OnInit, OnDestroy {

  policeList: Police[] = [];
  policeSubscription: Subscription | any;

  phonecasesForm: FormGroup;

  constructor(private fb: FormBuilder, private phonecasesService: PhonecasesService, private policeService: PoliceService) {
    this.phonecasesForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, Validators.required, Validators.min(0)],
      quantity: [0, Validators.required, Validators.min(0)],
      employeeName: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.policeService.getPolice().subscribe((police: Police[]) => {
      this.policeList = police;
    }, (error) => { console.log(error) });

    this.policeSubscription = this.policeService.police$.subscribe((police: Police[]) => {
      this.policeList = police;
    }, (error) => { console.log(error) });
  }

  ngOnDestroy(): void {
    this.policeSubscription.unsubscribe();
  }

  onSubmit(): void {
    console.log("onSubmit was called");
    const newPhonecases: Phonecases = new Phonecases(this.phonecasesForm.value.name, this.phonecasesForm.value.quantity, this.phonecasesForm.value.price, this.phonecasesForm.value.employeeName);
    this.phonecasesService.postPhonecases(newPhonecases).subscribe(() => {
      this.phonecasesForm.reset();
    });
  }
}
