import {UserState} from './user-store.state';
import {userFeatureName} from './user-store.reducer';
import {createSelector} from '@ngrx/store';

export const selectUserState = (state: any): UserState => state[userFeatureName];

export const selectUser = createSelector(
  selectUserState,
  (state) => state.user
);

export const selectUserLoading = createSelector(
  selectUserState,
  (state) => state.loading
);

export const selectUserError = createSelector(
  selectUserState,
  (state) => state.error
);
