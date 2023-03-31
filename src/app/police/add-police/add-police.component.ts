// add-police.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PoliceService } from '../police.service';
import { Police } from '../police.module';

@Component({
  selector: 'app-add-police',
  templateUrl: './add-police.component.html',
  styleUrls: ['./add-police.component.css']
})
export class AddPoliceComponent implements OnInit {

  policeForm: FormGroup;

  constructor(private fb: FormBuilder, private policeService: PoliceService) {
    this.policeForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log("onSubmit was called");
    const newPolice: Police = new Police(this.policeForm.value.name);
    this.policeService.postPolice(newPolice).subscribe(() => {
      this.policeForm.reset();
    });
  }
}
