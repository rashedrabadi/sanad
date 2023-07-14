import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  private dialogChoice = new Subject<boolean>();
  private lang = new BehaviorSubject('ar');
  constructor() { }
  public getDialogChoice(): Observable<boolean> {
    return this.dialogChoice.asObservable();
  }
  public setDialogChoice(choice: boolean) {
    return this.dialogChoice.next(choice);
  }
  public setLang(lang: string) {
    return this.lang.next(lang);
  }
  public getLang(): Observable<string> {
    return this.lang.asObservable();
  }
}
