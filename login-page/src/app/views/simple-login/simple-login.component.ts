import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-login',
  templateUrl: './simple-login.component.html',
  styleUrls: ['./simple-login.component.scss']
})
export class SimpleLoginComponent implements OnInit {

  isOpen = false;
  constructor() {
    this.isOpen = localStorage.getItem('simpleLogin') === 'open';
  }

  ngOnInit(): void {
  }
  radioChange(event: any) {
    console.log(event);
    localStorage.setItem('simpleLogin', event.value)
  }

}
