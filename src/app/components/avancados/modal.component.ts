import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from './dialog-overview-example-dialog.component';

export interface DialogData {
    animal: string;
    name: string;
  }
  
@Component({
    selector: 'app-modal',
    templateUrl: 'modal.component.html'
})

export class ModalComponent implements OnInit {
    animal!: string;
    name!: string;
    constructor(public dialog: MatDialog) { }

    ngOnInit() { }

    openDialog(): void {
        const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
          data: {name: this.name, animal: this.animal},
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.animal = result;
        });
      }
}