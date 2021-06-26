import { AuthService } from './../../services/auth.service';
import { ModalService } from './../../services/modal.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Base64 } from 'js-base64';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName = '';
  passWord = '';
  hideUserName = true;
  hideAccount = true
  isCheckedRemAccount = false;
  constructor(private modalService: ModalService, private authService: AuthService) { }

  ngOnInit(): void {
    let localAccount = localStorage.getItem('Account');
    if (localAccount) {
      this.accFormControl.setValue(Base64.decode(localAccount));
      this.isCheckedRemAccount = true;
    }
  }
  accFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(8)
  ]);

  userIdFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(20)
  ]);

  pwFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(12)
  ]);

  openDialog(type: number): void {
    this.modalService.openDialog(type);
  }
  checkRemAccount(event: any) {

    this.isCheckedRemAccount = !this.isCheckedRemAccount;
    if (this.isCheckedRemAccount) {
      localStorage.setItem('Account', Base64.encode(this.accFormControl.value));
    } else {
      localStorage.removeItem('Account');
    }
  }
  login() {
    this.authService.login().subscribe(respon => {

    });
  }
}
