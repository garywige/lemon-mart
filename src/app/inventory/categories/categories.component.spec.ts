import { ComponentFixture, TestBed } from '@angular/core/testing'
import {
  commonTestingModules,
  commonTestingProviders,
} from 'src/app/common/common.testing'

import { CategoriesComponent } from './categories.component'

describe('CategoriesComponent', () => {
  let component: CategoriesComponent
  let fixture: ComponentFixture<CategoriesComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: commonTestingModules,
      providers: commonTestingProviders,
      declarations: [CategoriesComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
