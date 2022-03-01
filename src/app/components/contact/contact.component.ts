import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { nameValidator } from './name.validator';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public checkoutForm: FormGroup;

  

  constructor(private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({

      name: ['', [Validators.required, nameValidator()]],
      address: ['', [Validators.required, Validators.pattern('[0-9]+ [a-zA-Z0-9]+')]],
      email: ['', [Validators.email]]
    });

  }

  ngOnInit(): void {
  }

  public  name(){
    return this.checkoutForm.get('name');
  }
  public  address(){
    return this.checkoutForm.get('address');
  }
  public  email(){
    return this.checkoutForm.get('email');
  }

  public submitForm(data: string) {
    console.log(data);
    if(this.checkoutForm.valid){
      window.alert('not valid!');
      return
    }
  }

};
