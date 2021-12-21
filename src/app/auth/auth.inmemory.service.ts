import { Injectable } from '@angular/core'
import { sign } from 'fake-jwt-sign'
import { Observable, of, throwError } from 'rxjs'

import { PhoneType, User } from '../user/user/user'
import { Role } from './auth.enum'
import { AuthService, IAuthStatus, IServerAuthResponse } from './auth.service'

@Injectable()
export class InMemoryAuthService extends AuthService {
  private defaultUser = User.Build({
    _id: '5da01751da27cc462d265913',
    email: 'manager@test.com',
    name: {
      first: 'Gary',
      last: 'Wige',
    },
    picture: '/assets/img/icons/lemon.svg',
    role: Role.Manager,
    dateOfBirth: new Date(1983, 12, 22),
    userStatus: true,
    address: {
      line1: '123 Main St.',
      city: 'Simi Valley',
      state: 'California',
      zip: '93065',
    },
    level: 2,
    phones: [
      {
        id: 0,
        type: PhoneType.Mobile,
        digits: '5555551234',
      },
    ],
  })

  constructor() {
    super()
    console.warn(
      "You're using the InMemoryAuthService. Do not use this service in production"
    )
  }

  protected authProvider(
    email: string,
    password: string
  ): Observable<IServerAuthResponse> {
    email = email.toLowerCase()

    if (!email.endsWith('@test.com')) {
      return throwError('Failed to login! Email needs to end with @test.com.')
    }

    const authStatus = {
      isAuthenticated: true,
      userId: this.defaultUser._id,
      userRole: email.includes('cashier')
        ? Role.Cashier
        : email.includes('clerk')
        ? Role.Clerk
        : email.includes('manager')
        ? Role.Manager
        : Role.None,
    } as IAuthStatus

    this.defaultUser.role = authStatus.userRole

    const authResponse = {
      accessToken: sign(authStatus, 'secret', { expiresIn: '1m', algorithm: 'none' }),
    } as IServerAuthResponse

    return of(authResponse)
  }

  protected transformJwtToken(token: IAuthStatus): IAuthStatus {
    return token
  }

  protected getCurrentUser(): Observable<User> {
    return of(this.defaultUser)
  }
}
