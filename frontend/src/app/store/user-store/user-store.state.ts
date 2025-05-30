import {User} from '../../generated';

export interface UserState {
  readonly user: User | null,
  loading: boolean,
  loaded: boolean,
  error: string | null
}
