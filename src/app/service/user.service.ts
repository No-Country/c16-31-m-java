import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private userStatusSubject = new BehaviorSubject<boolean>(this.getUserStatusFromStorage());
  userStatus$ = this.userStatusSubject.asObservable();

  setUserStatus(isOnline: boolean):void {
    localStorage.setItem('userStatus', JSON.stringify(isOnline));
    this.userStatusSubject.next(isOnline);
  }

  getUserStatus(): Observable<boolean> {
    return this.userStatus$;
  }

  private getUserStatusFromStorage():boolean {
    const storedStatus = localStorage.getItem('userStatus');
    return storedStatus ? JSON.parse(storedStatus) : false;
  }
}
