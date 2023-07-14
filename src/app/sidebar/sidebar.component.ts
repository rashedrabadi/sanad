import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { navbarDataAr } from './nav-data-ar';
import { navbarDataEn } from './nav-data-en';
//import { AuthService } from '../login/auth.service';
//import { Role } from '../models/role.model';
//import { UsersService } from '../users/users.service';
import { GeneralService } from '../services/general/general.service';
import { TranslateService } from '@ngx-translate/core';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('350ms',
          style({ opacity: 1 })
        )
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('350ms',
          style({ opacity: 0 })
        )
      ])
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms',
          keyframes([
            style({ transform: 'rotate(0deg)', offset: '0' }),
            style({ transform: 'rotate(2turn)', offset: '1' })
          ])
        )
      ])
    ])
  ]
})
export class SidebarComponent implements OnInit {
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = true;
  screenWidth = 0;
  navData: any;
  //public roleID;
 // public rolename: any;
  language: any;
  isLoading = false;
  constructor(public generalService: GeneralService, public translate: TranslateService) {//private authService: AuthService,public usersService: UsersService,
    this.screenWidth = window.innerWidth;

  }
  ngOnDestroy(): void {
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
    }
    else {
      this.collapsed = true;
      this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
    }
  }
  ngOnInit(): void {
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  //  this.roleID = localStorage.getItem('roleID');
    this.isLoading = true;
   this.generalService.getLang().subscribe(lang => {
    
    if (!!lang) {
      this.isLoading = false;
      this.language = lang;
      if (lang === 'en') {
        this.navData = navbarDataEn;
      }
      else if (lang === 'ar') {
        this.navData = navbarDataAr;
      }
    }
  });
    // this.usersService.getRole(this.roleID).subscribe((role) => {
    //   if (!!role) {
    //     this.isLoading = false;
    //     this.rolename = role.data.attributes.name;
    //     localStorage.setItem('ROLE_NAME', this.rolename);
    //     if (this.roleID && this.rolename) {
      
    //     }
    //   }
    // });
  }
  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }
}
