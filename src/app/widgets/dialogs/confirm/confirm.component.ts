import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogData } from 'src/app/models/confirm-dialog-data.model';
import { GeneralService } from 'src/app/services/general/general.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData,private generalService:GeneralService) { }

  ngOnInit(): void {
  }
  onChoice(choice:boolean){
    this.generalService.setDialogChoice(choice);
  }
}
