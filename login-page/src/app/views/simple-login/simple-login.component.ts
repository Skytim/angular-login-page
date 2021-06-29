import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-login',
  templateUrl: './simple-login.component.html',
  styleUrls: ['./simple-login.component.scss']
})
export class SimpleLoginComponent implements OnInit {

  isOpen = false;
  constructor(private authService:AuthService) {
    this.isOpen = this.authService.hasSimpleLogin();
  }

  ngOnInit(): void {
  }

  radioChange(event: any) {
    localStorage.setItem('simpleLogin', event.value)
  }

}
