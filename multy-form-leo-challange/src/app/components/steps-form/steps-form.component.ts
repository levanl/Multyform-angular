import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';


@Component({
  selector: 'app-steps-form',
  templateUrl: './steps-form.component.html',
  styleUrls: ['./steps-form.component.scss']
})
export class StepsFormComponent  implements OnInit{

  constructor( 
  private sharedService:SharedService 
  ){}

  counterStep:number = this.sharedService.counter;

  ngOnInit(): void {
    this.sharedService.counter$.subscribe((value) => {
      this.counterStep = value
    })
  }

}
