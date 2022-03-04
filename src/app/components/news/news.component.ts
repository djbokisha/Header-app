import { Component,EventEmitter,HostListener, Input, OnInit, Output } from '@angular/core';
import { Card } from './card.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  @Output() cardWasSelected = new EventEmitter<Card>();
  @Output() cardSelected = new EventEmitter<void>()

  selectedCard: Card;

  cards: Card [] = [
    new Card("../../../assets/New-Blockchain-Network-TNC-Mainnet-Promises-To-Hit-300000-Transactions-Per-Second.jpeg","A Test ", "This is simply a test",),
    new Card("../../../assets/New-Blockchain-Network-TNC-Mainnet-Promises-To-Hit-300000-Transactions-Per-Second.jpeg","Card title","Some quick example text to build on the card title and make up the bulk of the card's content."),
    new Card("../../../assets/New-Blockchain-Network-TNC-Mainnet-Promises-To-Hit-300000-Transactions-Per-Second.jpeg","Card title","Some quick example text to build on the card title and make up the bulk of the card's content. 3"),
    new Card("../../../assets/New-Blockchain-Network-TNC-Mainnet-Promises-To-Hit-300000-Transactions-Per-Second.jpeg","Card title","Some quick example text to build on the card title and make up the bulk of the card's content. 4")


  ]
  onCardSelected(card: Card){
    this.cardWasSelected.emit(card);
  }

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
    console.log(this.cards)
  }

  onClick(){
    this.windowfixed = false;
  }

  onSelected(){
    this.cardSelected.emit();

  }

}
