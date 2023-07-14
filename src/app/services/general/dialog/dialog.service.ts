import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmDialogData } from 'src/app/models/confirm-dialog-data.model';
import { ConfirmComponent } from 'src/app/widgets/dialogs/confirm/confirm.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }
  confirmDialog(data: ConfirmDialogData): Observable<boolean> {
    return this.dialog.open(ConfirmComponent, {
      data,
      width: '550px',
      disableClose: true
    }).afterClosed();
  }
}
