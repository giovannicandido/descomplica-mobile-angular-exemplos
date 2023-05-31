import { Component, Inject, OnInit } from '@angular/core';
import { DialogData } from './modal.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
@Component({
    selector: 'app-dialog-overview',
    templateUrl: './dialog-overview-example-dialog.component.html'
})

export class DialogOverviewExampleDialog implements OnInit {
    constructor(
        public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
      ) {}
    ngOnInit(): void {
       
    }
    
      onNoClick(): void {
        this.dialogRef.close();
      }
}