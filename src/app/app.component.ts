import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ResizedEvent } from 'angular-resize-event';
import { Subscription } from 'rxjs';
//import { LOGIN_ROUTE_URLS } from './app.routes.names';
//import { AuthService } from './login/auth.service';
import { GeneralService } from './services/general/general.service';
//import { NgxPermissionsService } from 'ngx-permissions';
//import { LoadPermissionsService } from './load-permissions.service';
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sanad';
  isSideNavCollapsed = false;
  screenWidth = 0;
  public isLoggedIn: boolean = false;
  private authListenerSubs: Subscription;
  constructor(
    //private authService: AuthService,
    private router: Router,
    public translate: TranslateService,
    public generalService: GeneralService) {
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('ar');
  }
  ngOnInit() {
   // this.authService.autoAuthUser();
    this.isLoggedIn = true;//this.authService.getIsAuth()
    // this.authListenerSubs = this.authService.getAuthStatusListener()
    //   .subscribe(
    //     isAuthenticated => {
    //       this.isLoggedIn = isAuthenticated;
    //     }
    //   );
    if (localStorage.getItem('language') !== null) {
      this.generalService.setLang(localStorage.getItem('language'));
    }
    else {
      this.generalService.setLang('ar');
    }
  }

  ngOnDestroy(): void {
    this.authListenerSubs.unsubscribe();
  }
  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
