import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature : string){
    this.featureSelected.emit(feature)
  }
  
  navbarfixed:boolean = true;

  @HostListener('window:scroll',['$event']) onscroll(){
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
