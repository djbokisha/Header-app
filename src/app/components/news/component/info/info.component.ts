import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../card.model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input() cardEl : Card ;

 cards: Card;
  constructor() { }

  ngOnInit(): void {

    console.log(this.cardEl)
  }

  saveCard(){

  }

}
