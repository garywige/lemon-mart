import { Component, Inject, OnInit } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogConfig, MatDialogRef } from '@angular/material/dialog'
import { Observable } from 'rxjs'

@Component({
  // prettier-ignore
  template: `
    <h2 mat-dialog-title>{{ data.title }}</h2>
    <mat-dialog-content>
      <p>{{ data.content }}</p>
    </mat-dialog-content>
    <mat-dialog-actions>
      <span class="flex-spacer"></span>
      <button mat-button mat-dialog-close *ngIf="data.cancelText">
        {{ data.cancelText }}
      </button>
      <button mat-button mat-button-raised color="accent" [mat-dialog-close]="true" cdkFocusInitial>
        {{ data.okText }}
      </button>
    </mat-dialog-actions>
  `,
})
export class SimpleDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<SimpleDialogComponent, boolean>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}
}
