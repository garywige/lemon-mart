import { BehaviorSubject, Observable } from 'rxjs'

import { IUser } from '../user/user/user'
import { IAuthService, IAuthStatus } from './auth.service'

export class AuthServiceFake implements IAuthService {
  authStatus$: BehaviorSubject<IAuthStatus>
  currentUser$: BehaviorSubject<IUser>

  constructor() {
    this.authStatus$ = new BehaviorSubject<IAuthStatus>(<IAuthStatus>{})
    this.currentUser$ = new BehaviorSubject<IUser>(<IUser>{})
  }

  login(email: string, password: string): Observable<void> {
    return new Observable<void>()
  }
  logout(clearToken?: boolean): void {
    return
  }
  getToken(): string {
    return 'fake token'
  }
}
