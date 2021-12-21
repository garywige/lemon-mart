import { ComponentFixture, TestBed } from '@angular/core/testing'
import {
  commonTestingModules,
  commonTestingProviders,
} from 'src/app/common/common.testing'

import { UserManagementComponent } from './user-management.component'

describe('UserManagementComponent', () => {
  let component: UserManagementComponent
  let fixture: ComponentFixture<UserManagementComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserManagementComponent],
      imports: commonTestingModules,
      providers: commonTestingProviders,
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagementComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
