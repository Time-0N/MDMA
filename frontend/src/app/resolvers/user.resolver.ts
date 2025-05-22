import {inject} from '@angular/core';
import {userDataResolverExecuted} from '../store/user-store/user-store.actions';
import {Store} from '@ngrx/store';
import {selectUserState} from '../store/user-store/user-store.selector';
import {filter, map, take} from 'rxjs';

export const resolveUserDataConfiguration: () => Promise<boolean | undefined> = () => {
  const store = inject(Store);

  store.dispatch(userDataResolverExecuted());

  return store.select(selectUserState).pipe(
    filter(user => !!user),
    take(1),
    map(() => true)
  ).toPromise();
}
