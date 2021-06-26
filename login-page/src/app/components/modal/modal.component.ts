import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

  closeFirstLogin(): void {
    this.dialogRef.close();
    localStorage.setItem('announce','true');
  }
  settings(): void {
    this.dialogRef.close();
    localStorage.setItem('announce','true');
  }

}
