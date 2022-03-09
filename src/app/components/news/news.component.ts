import { Component,EventEmitter,HostListener, Input, OnInit, Output } from '@angular/core';
import { Card } from './card.model';

interface karta {
   imagePath: string;
   title: string;
   description: string;
}
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  @Output() cardWasSelected = new EventEmitter<Number>();
  @Output() cardSelected = new EventEmitter<void>()

  selectedCard: karta;
  message = "hello World";

  cards: Array<any>


 

  navbarfixed:boolean = true;

  windowfixed:boolean = true;

  @HostListener ('window:scroll',['$event']) onscroll(){
    if(window.scrollY)
    {
      this.navbarfixed = false;
      setTimeout(() => {

        this.navbarfixed = true;
      }, 200);
    }
  
   
  }

  constructor() { }

  ngOnInit(): void {


  this.cards = [
    {imagePath:"../../../assets/New-Blockchain-Network-TNC-Mainnet-Promises-To-Hit-300000-Transactions-Per-Second.jpeg", title: "title 1", description: "the card's content. 1"},
    {imagePath:"../../../assets/New-Blockchain-Network-TNC-Mainnet-Promises-To-Hit-300000-Transactions-Per-Second.jpeg", title: "title 2", description: "the card's content. 2"},
    {imagePath:"../../../assets/New-Blockchain-Network-TNC-Mainnet-Promises-To-Hit-300000-Transactions-Per-Second.jpeg", title: "title 3", description: "the card's content. 3"}


  ]
  this.selectedCard

  }

  onClick(card: any){
    this.windowfixed = false;
    this.selectedCard = card
  }

  onSelected(){
    this.windowfixed = false;
    console.log(this.cards.values)
  }

 

}
