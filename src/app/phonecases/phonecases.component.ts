//phonecases.component.ts
import { Component, OnInit } from '@angular/core';
import { PhonecasesService } from '../phonecases/phonecases.service';
import { Subscription } from 'rxjs';
import { Phonecases } from '../phonecases/phonecases.module';

@Component({
  selector: 'app-phonecases',
  templateUrl: './phonecases.component.html',
  styleUrls: ['./phonecases.component.css']
})
export class PhonecasesComponent implements OnInit {

  phonecasesList: Phonecases[] = [];

  constructor(private phonecasesService: PhonecasesService) { }

  ngOnInit(): void {
    this.phonecasesService.getPhonecases().subscribe((phonecases: Phonecases[]) => {
      this.phonecasesList = phonecases;
    }, (error) => { console.log(error) });
  }

  deletePhonecase(id: number) {
    this.phonecasesService.deletePhonecase(id).subscribe(() => {
      this.phonecasesList = this.phonecasesList.filter((phonecases: Phonecases) => phonecases.id !== id);
    });
  }
}
