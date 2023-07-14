import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GeneralService } from 'src/app/services/general/general.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  @Input() HeadArray :any[] = [];
  @Input() GridArray :any[] = [];
  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();
  @Output() onOpen = new EventEmitter<any>();
  language: string;
  constructor(public generalService: GeneralService, public translate: TranslateService) { }
  ngOnInit(): void {
    this.generalService.getLang().subscribe(lang => {
      this.language = lang;
    });
  }
  edit(item: any) {
    this.onEdit.emit(item);
  }
  delete(item: any) {
    this.onDelete.emit(item);
  }
  open(item:any){
    this.onOpen.emit(item);
  }
}
