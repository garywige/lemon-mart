import { ComponentFixture, TestBed } from '@angular/core/testing'
import {
  commonTestingModules,
  commonTestingProviders,
} from 'src/app/common/common.testing'

import { StockEntryComponent } from './stock-entry.component'

describe('StockEntryComponent', () => {
  let component: StockEntryComponent
  let fixture: ComponentFixture<StockEntryComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: commonTestingModules,
      providers: commonTestingProviders,
      declarations: [StockEntryComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(StockEntryComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
