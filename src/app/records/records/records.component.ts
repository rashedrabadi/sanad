import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PageEvent } from '@angular/material/paginator';
import { DialogService } from 'src/app/services/general/dialog/dialog.service';
import { GeneralService } from 'src/app/services/general/general.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {
  headArray: any;
  language: any;
  isLoading = false;
  totalUsers = 0;
  usersPerPage = 10;
  currentPage = 1;
  usersList: any[] = [];
  users: any[] = [];
  constructor(private dialogService: DialogService, public generalService: GeneralService, public translate: TranslateService) { }

  ngOnInit(): void {
    this.generalService.getLang().subscribe(lang => {
      this.language = lang;

      this.translate.use(lang);
      if (this.language === 'en') {
        this.headArray = [
          // { 'Head': 'img', 'FieldName': 'img' },
          { 'Head': 'Name', 'FieldName': 'name' },
          { 'Head': 'Gender', 'FieldName': 'gender' },
          { 'Head': 'Nationality', 'FieldName': 'nationality' },
          { 'Head': 'Phone', 'FieldName': 'phone' },
          { 'Head': 'Added date', 'FieldName': 'date' },
          { 'Head': 'Email', 'FieldName': 'email' },
          { 'Head': 'Options', 'FieldName': '' },

        ];
      }
      else if (this.language === 'ar') {
        this.headArray = [
          { 'Head': 'الإعدادات', 'FieldName': '' },
          { 'Head': 'البريد الإلكتروني ', 'FieldName': 'email' },
          { 'Head': 'تاريخ الاضافة', 'FieldName': 'date' },
          { 'Head': 'الهاتف', 'FieldName': 'phone' },
          { 'Head': 'الجنسية', 'FieldName': 'nationality' },
          { 'Head': 'الجنس', 'FieldName': 'gender' },
          { 'Head': 'الاسم', 'FieldName': 'name' },
          //     { 'Head': 'img', 'FieldName': 'img' },

        ];
      }
      console.log('this.headArray', this.headArray);
    });
    this.users = [
      { name: 'Ahmad Mohammad', gender: 'Male', nationality: 'Jordanian', phone: '0780000000', date: '12/3/2023', email: 'amuhammad@swqas.com' },
      { name: 'Soad khaled', gender: 'Female', nationality: 'Jordanian', phone: '0780000000', date: '11/4/2023', email: 'soadk@swqas.com' },
      { name: 'Omar Mohammad', gender: 'Male', nationality: 'French', phone: '0780000000', date: '1/1/2022', email: 'omarm@swqas.com' },
      { name: 'Ahmad Mohammad', gender: 'Male', nationality: 'Palestinian', phone: '0780000000', date: '2/12/2022', email: 'ahmadm@swqas.com' },
    ]
    this.totalUsers = this.users.length;
    this.usersList = this.users;
    // this.usersService.getUsers(this.currentPage);
    // this.isLoading = true;
    // this.usersSub = this.usersService.getUserUpdateListener()
    //   .subscribe((usersData: { users: User[], totalUsers: any }) => {
    //     if (!!usersData.users) {
    //       this.users = usersData.users;
    //       this.totalUsers = usersData.totalUsers;
    //       this.usersList = this.users;
    //       // this.usersList = this.users.filter(res => res.isOrg !== 1);
    //       this.isLoading = false;
    //     }
    //   });
  }
  editUser(item: any) {
    alert('not implemented due to not having APIS')
    // this.router.navigate([USERS_URLS.BASE + '/' + USERS_URLS.EDIT_USER + '/' + item.id]);
  }
  deleteUser(item: any) {

    if (this.language === 'en') {
      this.dialogService.confirmDialog({
        title: 'Delete User History?',
        message: 'Are you sure you want to delete this user history?',
        confirmText: 'Yes',
        cancelText: 'No'
      });
    }
    else if (this.language === 'ar') {
      this.dialogService.confirmDialog({
        title: 'حذف تاريخ المستخدم؟',
        message: 'هل أنت متأكد أنك تريد حذف تاريخ هذا المستخدم؟',
        confirmText: 'نعم',
        cancelText: 'لا'
      });
    }

    this.generalService.getDialogChoice().subscribe(choice => {
      if (!!choice) {
        if (choice === true) {
          // this.usersService.deleteUser(item.id);
          alert('user deleted!');
        }
      }
    });



  }
  ngOnDestroy(): void {
    // this.usersSub.unsubscribe();
  }
  newUser(): void {
    alert('not implemented due to not having APIS');
    //  this.router.navigate([USERS_URLS.BASE + '/' + USERS_URLS.ADD_USER]);


  }
  onChangedPage(pageData: PageEvent) {
    // this.isLoading = true;
    this.currentPage = pageData.pageIndex + 1;
    this.usersPerPage = pageData.pageSize;
    // this.usersService.getUsers(this.currentPage);
  }
}
