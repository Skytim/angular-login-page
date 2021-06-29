import { Observable } from 'rxjs';
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
  hideAccount = true;
  hidePW = true;

  constructor(private _elementRef: ElementRef, private modalService: ModalService, private authService: AuthService) {
  }
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    let localAccount = localStorage.getItem('Account');
    if (localAccount) {
      let decode = Base64.decode(localAccount)
      let disPlayAcc = this.authService.disPlayAcc(decode);
      this.accFormControl.setValue(disPlayAcc);
      this._elementRef.nativeElement.querySelector('.acc').setAttribute('originalVal', decode);
      this.authService.remAcc();
    }
    this.accFormControl.valueChanges.subscribe(res => {
      if (this.authService.isRemAccResult() && this.authService.hasSimpleLogin()) {
        this.opernacc();
      }
    });
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
    let localAccount = localStorage.getItem('Account');
    if (!event.checked && localAccount) {
      let simpleLogin = localStorage.getItem('simpleLogin') === 'open';
      this.authService.unRemAcc();
      if (simpleLogin) {

        setTimeout(() => {
          this.authService.remAcc();
        }, 300);

        this.modalService.openDialog(6);
      } else {
        if (event) {
          localStorage.removeItem('Account');
        }
      }
    }
  }

  login() {
    let acc = this._elementRef.nativeElement.querySelector('.acc').getAttribute('originalVal');
    this.authService.login(acc, this.userIdFormControl.value, this.pwFormControl.value);
  }

  isCheckedRemAccount(): Observable<boolean> {
    return this.authService.isRemAcc();
  }

  opernacc() {
    this.modalService.openRetAcc(7).subscribe(res => {
      if (res) {
        let localAccount = localStorage.getItem('Account');
        if (localAccount) {
          let decode = Base64.decode(localAccount)
          let disPlayAcc = this.authService.disPlayAcc(decode);
          this.accFormControl.setValue(disPlayAcc, { emitEvent: false });
          this._elementRef.nativeElement.querySelector('.acc').setAttribute('originalVal', decode);
        }
      }
    });
  }

}
