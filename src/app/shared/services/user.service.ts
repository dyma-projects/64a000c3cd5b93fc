import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public users$: BehaviorSubject<string[]> = new BehaviorSubject([]);

  public addUser(username: string): void {
    this.users$.next([...this.users$.value, username]);
  }

  constructor() {}
}
