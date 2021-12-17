import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar>
      <button mat-button routerLink="/home">{{ title }}</button>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'LemonMart'
}
