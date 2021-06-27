import { AuthService } from './../../services/auth.service';
import { ModalService } from './../../services/modal.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Base64 } from 'js-base64';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
  userName = '';
  passWord = '';
  hideUserName = true;
  hideAccount = true
  isCheckedRemAccount = false;
  constructor(private _elementRef: ElementRef, private modalService: ModalService, private authService: AuthService) {
    this.accFormControl.valueChanges.subscribe(res => {
      if (this.isCheckedRemAccount) {
        console.log(res);
        localStorage.setItem('Account', Base64.encode(res))
      }
    });
  }
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    let localAccount = localStorage.getItem('Account');
    if (localAccount) {
      let decode = Base64.decode(localAccount)
      let disPlayAcc = this.authService.disPlayAcc(decode);

      this.accFormControl.setValue(disPlayAcc);
      this.isCheckedRemAccount = true;
      this._elementRef.nativeElement.querySelector('.acc').setAttribute('originalVal', decode);
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
    let acc = this._elementRef.nativeElement.querySelector('.acc').getAttribute('originalVal');
    this.authService.login(acc, this.userIdFormControl.value, this.pwFormControl.value).subscribe((res: any) => {
      /// Redirect to main
      if (res['po_Login_19_2'].ReturnCode === 0) {


      } else if (res['po_Login_19_2'].ReturnCode === -11) {

        this.modalService.openResDialog(res['po_Login_19_2'].ReturnMessageTitle, res['po_Login_19_2'].ReturnMessage, 4);

      } else if (res['po_Login_19_2'].ReturnCode === -14) {

        this.modalService.openResDialog(res['po_Login_19_2'].ReturnMessageTitle, res['po_Login_19_2'].ReturnMessage, 5);
      }

    });
  }
}
