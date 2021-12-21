import { ComponentFixture, TestBed } from '@angular/core/testing'

import { commonTestingModules, commonTestingProviders } from '../common/common.testing'
import { InventoryComponent } from './inventory.component'

describe('InventoryComponent', () => {
  let component: InventoryComponent
  let fixture: ComponentFixture<InventoryComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InventoryComponent],
      imports: commonTestingModules,
      providers: commonTestingProviders,
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
