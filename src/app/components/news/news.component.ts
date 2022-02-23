import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {


  navbarfixed:boolean = true;

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
  }

}
