import { Component, OnInit } from '@angular/core';
import { PoliceService } from '../police/police.service';
import { Subscription } from 'rxjs';
import { Police } from '../police/police.module';


@Component({
  selector: 'app-police',
  templateUrl: './police.component.html',
  styleUrls: ['./police.component.css']
})
export class PoliceComponent implements OnInit {

  policeList: Police[] = [];
  policeSubscription: Subscription | any;

  constructor(private policeService: PoliceService) { }

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
}
