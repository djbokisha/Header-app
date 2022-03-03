import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  message : Observable<any>;

  


  constructor(private data: DataServiceService) {
    

   }

  ngOnInit(): void {
    this.message = this.data.message
  }

}
