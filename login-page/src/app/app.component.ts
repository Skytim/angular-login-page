import { ModalService } from './services/modal.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private modalService:ModalService) {

  }
  ngOnInit(): void {
    let announce = localStorage.getItem('announce');
    if(!announce){
      this.modalService.openDialog(3);
    }
  }
}
