import { ComponentFixture, TestBed } from '@angular/core/testing'

import { commonTestingModules, commonTestingProviders } from './common/common.testing'
import { NavigationMenuComponent } from './navigation-menu.component'

describe('NavigationMenuComponent', () => {
  let component: NavigationMenuComponent
  let fixture: ComponentFixture<NavigationMenuComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: commonTestingModules,
      providers: commonTestingProviders,
      declarations: [NavigationMenuComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationMenuComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
