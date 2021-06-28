import { AuthService } from './services/auth.service';
import { ModalService } from './services/modal.service';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router, private modalService: ModalService, private titleService: Title, private authService: AuthService) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        var title = this.getTitle(router.routerState, router.routerState.root).join('-');
        titleService.setTitle(title);
      }
    });
  }
  ngOnInit(): void {
    let announce = localStorage.getItem('announce');
    if (!announce) {
      this.modalService.openDialog(3);
    }
  }

  public get title(): string {
    return this.titleService.getTitle();
  }

  getTitle(state: any, parent: any): any {
    var data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  };

  logout() {
    this.authService.logout();
  }


  public get isLoggedIn() : Observable<boolean> {
    return this.authService.isLoggedIn();
  }

}
