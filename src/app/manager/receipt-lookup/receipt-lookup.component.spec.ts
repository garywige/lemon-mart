import { ComponentFixture, TestBed } from '@angular/core/testing'
import {
  commonTestingModules,
  commonTestingProviders,
} from 'src/app/common/common.testing'

import { ReceiptLookupComponent } from './receipt-lookup.component'

describe('ReceiptLookupComponent', () => {
  let component: ReceiptLookupComponent
  let fixture: ComponentFixture<ReceiptLookupComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReceiptLookupComponent],
      imports: commonTestingModules,
      providers: commonTestingProviders,
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptLookupComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
