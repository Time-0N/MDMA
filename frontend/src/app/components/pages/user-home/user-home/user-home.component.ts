import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {User} from '../../../../generated';
import {selectUser} from '../../../../store/user-store/user-store.selector';
import {AsyncPipe, NgIf} from '@angular/common';

@Component({
  selector: 'app-user-home',
  imports: [
    AsyncPipe,
    NgIf
  ],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.scss'
})
export class UserHomeComponent {
  user$: Observable<User | null>;
  constructor(
    private readonly store: Store
  ) {
    this.user$ = this.store.select(selectUser);
  }
}
