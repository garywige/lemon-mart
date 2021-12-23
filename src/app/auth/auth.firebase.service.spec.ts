import { TestBed } from '@angular/core/testing'
import { AngularFireAuth } from '@angular/fire/compat/auth'

import { commonTestingModules, commonTestingProviders } from '../common/common.testing'
import { FirebaseAuthService } from './auth.firebase.service'

describe('FirebaseAuthService', () => {
  let service: FirebaseAuthService

  beforeEach(() => {
    let afAuth = jasmine.createSpyObj('AngularFireAuth', ['signOut'])

    TestBed.configureTestingModule({
      imports: commonTestingModules,
      providers: commonTestingProviders.concat([
        {
          provide: AngularFireAuth,
          useValue: afAuth,
        },
        FirebaseAuthService,
      ]),
    })
    service = TestBed.inject(FirebaseAuthService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
