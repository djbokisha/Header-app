import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

    private messageSource = new BehaviorSubject<any>("");



  constructor() {}

  changeMessage(message: any){
    this.messageSource.next(message)

  }
  get message(){
    console.log(this.messageSource.value)

    // return this.messageSource.value;

    return this.messageSource;




  }
}
