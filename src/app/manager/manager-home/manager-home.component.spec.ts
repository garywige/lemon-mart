import { ComponentFixture, TestBed } from '@angular/core/testing'
import {
  commonTestingModules,
  commonTestingProviders,
} from 'src/app/common/common.testing'

import { ManagerHomeComponent } from './manager-home.component'

describe('ManagerHomeComponent', () => {
  let component: ManagerHomeComponent
  let fixture: ComponentFixture<ManagerHomeComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagerHomeComponent],
      imports: commonTestingModules,
      providers: commonTestingProviders,
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerHomeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
