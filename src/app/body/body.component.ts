import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
//import { Subscription } from 'rxjs';
//import { AuthService } from '../login/auth.service';
import { GeneralService } from '../services/general/general.service';
//import { LoadPermissionsService } from '../load-permissions.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  constructor(public generalService: GeneralService, public translate: TranslateService,) { }//private authService: AuthService,private userPermissions: LoadPermissionsService
  userIsAuthenticated = false;
  //private authListenerSubs: Subscription;
  @Input() collapsed = false;
  @Input() screenWidth = 0;
  language: any;
  ngOnInit(): void {
    this.userIsAuthenticated = true;//this.authService.getIsAuth()
    // this.authListenerSubs = this.authService.getAuthStatusListener()
    //   .subscribe(
    //     isAuthenticated => {
    //       this.userIsAuthenticated = isAuthenticated;
    //     }
    //   );
    this.generalService.getLang().subscribe(lang => {
      this.language = lang;
    });
    // if(this.userIsAuthenticated){
    //   this.userPermissions.loadPermissions();
    // }
    
  }
  getBodyClass(): string {
    let styleClass = '';
    if(this.language==='en'){
      if (this.collapsed && this.screenWidth > 768) {
        styleClass = 'body-trimmed';
      } else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
        styleClass = 'body-md-screen'
      }
    } else if(this.language==='ar') {
      if (this.collapsed && this.screenWidth > 768 && this.userIsAuthenticated) {
        styleClass = 'body-trimmed arabic';
      } else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0 && this.userIsAuthenticated) {
        styleClass = 'body-md-screen arabic'
      }
      else if(!this.collapsed && this.screenWidth > 768 && this.userIsAuthenticated){
        styleClass = 'body arabic';
      }
    }
    return styleClass;
  }
  ngOnDestroy(): void {
   // this.authListenerSubs.unsubscribe();
  }
}
