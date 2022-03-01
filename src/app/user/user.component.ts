import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  message: string;


  constructor(private data: DataServiceService) {
    
    
   }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message )

  }

}
