import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class UiService {
  private showSideBar: boolean = false;
  private subject = new Subject<any>();
  constructor() {}
  toggleSideBar(): void {
    this.showSideBar = !this.showSideBar;
    this.subject.next(this.showSideBar);
  }
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
