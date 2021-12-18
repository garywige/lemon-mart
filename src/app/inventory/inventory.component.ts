import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-inventory',
  template: `
    <mat-toolbar color="primary">
      <button mat-button routerLink="/inventory/home" routerLinkActive="active-link">
        Inventory Dashboard
      </button>
      <button
        mat-button
        routerLink="/inventory/stock-entry"
        routerLinkActive="active-link"
      >
        Stock Entry
      </button>
      <button mat-button routerLink="/inventory/products" routerLinkActive="active-link">
        Products
      </button>
      <button
        mat-button
        routerLink="/inventory/categories"
        routerLinkActive="active-link"
      >
        Categories
      </button>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      div[fxLayout] {
        margin-top: 32px;
      }
    `,
    `
      .active-link {
        font-weight: bold;
        border-bottom: 2px solid #005005;
      }
    `,
  ],
})
export class InventoryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
