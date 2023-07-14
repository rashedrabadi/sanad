//import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
//import { Subscription } from 'rxjs';
import {  ROUTE_URLS } from '../app.routes.names';
//import { AuthService } from '../login/auth.service';
import { GeneralService } from '../services/general/general.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit, OnDestroy {
  public ROUTE_URLS = ROUTE_URLS;
  userIsAuthenticated = false;
 // private authListenerSubs: Subscription;
  isEnglish: boolean = false;
  language:any;
  constructor(private router: Router, public translate: TranslateService, public generalService: GeneralService) {//private authService: AuthService,
  }

  ngOnInit(): void {
    this.userIsAuthenticated = true;//this.authService.getIsAuth();
    // this.authListenerSubs = this.authService.getAuthStatusListener()
    //   .subscribe(
    //     isAuthenticated => {
    //       this.userIsAuthenticated = isAuthenticated;
    //     }
    //   );
      this.generalService.getLang().subscribe(lang => {
        this.language = lang;
      });
  }
  onLogout(): void {
    //this.authService.logout();
  }
  onChangeLanguage(): void {
    if (this.isEnglish === true) {
      localStorage.setItem('language','en');
      this.generalService.setLang(localStorage.getItem('language'));
      this.translate.use('en');
      this.isEnglish = !this.isEnglish;
    }
    else {
      localStorage.setItem('language','ar');
      this.generalService.setLang(localStorage.getItem('language'));
      this.translate.use('ar');
      this.isEnglish = !this.isEnglish;
    }
  }
  ngOnDestroy(): void {
  //  this.authListenerSubs.unsubscribe();
  }
}
