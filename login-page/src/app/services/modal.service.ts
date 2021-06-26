import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../components/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modelInfo: any = {
    1: {
      title: '全面提升帳戶的使用安全', message: '自108年5月起，登入需輸入使用者名稱，請立即前往設定．若您設定過，可關閉並省略此提醒', type: 1
    },
    2: {
      title: '', message: '帳號為您的身分證字號．倘為外籍人士，請填寫要保書上，請填寫要保書上填寫之號碼，例如：：護照號碼/居留證號碼/當地的身分證字號...等'
      , type: 2
    },
    3: {
      title: '全面提升帳戶的使用安全', message: '自108年5月起，登入需輸入使用者名稱，請立即前往設定．若您設定過，可關閉並省略此提醒'
      , type: 3
    }
  }

  constructor(public dialog: MatDialog) { }

  openDialog(type: number): void {
    let info = this.modelInfo[type];
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '320px',
      maxHeight: '350px',
      data: info,
      panelClass: 'custom-dialog-container'
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }
}
