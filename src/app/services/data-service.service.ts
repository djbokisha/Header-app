import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

    private messageSource = new BehaviorSubject<string>("default message work !!!");
    currentMessage = this.messageSource.asObservable();

    private dataSource = new BehaviorSubject<string>('')

  constructor() {}

  changeMessage(message: string){
    this.messageSource.next(message)
  }
}
