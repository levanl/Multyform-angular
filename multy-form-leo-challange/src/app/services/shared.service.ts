import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MainFormsComponent } from '../components/main-forms/main-forms.component';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  counter:number = 0;

  counter$: BehaviorSubject<number> = new BehaviorSubject(1);
}
