import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../card.model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input() cardEl : Card ;
  @Input() message: string;
  @Input() cards: Array<any>;
  @Input() selectedCard: Card;

  

//  cards: Card;
  constructor() { }
  ngOnInit(): void {


  }

  saveCard(){

  }

 

}
