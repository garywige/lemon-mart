import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { catchError, combineLatest, filter, tap } from 'rxjs'
import { SubSink } from 'subsink'

import { AuthService, defaultAuthStatus } from './auth/auth.service'
import { EmailValidation, PasswordValidation } from './common/validations'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
      .error {
        color: red;
      }
    `,
    `
      div[fxLayout] {
        margin-top: 32px;
      }
    `,
  ],
})
export class LoginComponent implements OnInit {
  private subs = new SubSink()
  loginForm: FormGroup
  loginError = ''
  redirectUrl: string

  constructor(
    private formBuilder: FormBuilder,
    private authSdervice: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.subs.sink = route.paramMap.subscribe(
      (params) => (this.redirectUrl = params.get('redirectUrl') ?? '')
    )

    this.loginForm = <FormGroup>{}
    this.redirectUrl = ''
  }

  ngOnInit(): void {
    this.authSdervice.logout()
    this.buildLoginForm()
  }

  buildLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', EmailValidation],
      password: ['', PasswordValidation],
    })
  }

  async login(submittedForm: FormGroup) {
    this.authSdervice
      .login(submittedForm.value.email, submittedForm.value.password)
      .pipe(catchError((err) => (this.loginError = err)))

    this.subs.sink = combineLatest([
      this.authSdervice.authStatus$,
      this.authSdervice.currentUser$,
    ])
      .pipe(
        filter(([authStatus, user]) => authStatus.isAuthenticated && user?._id !== ''),
        tap(([authStatus, user]) => {
          this.router.navigate([this.redirectUrl || '/manager'])
        })
      )
      .subscribe()
  }
}
