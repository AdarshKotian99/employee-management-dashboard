import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {

  constructor(public dialogRef : MatDialogRef<ConfirmDialogComponent>) { }

  onConfirm():void{
    this.dialogRef.close(true); // Close the dialog and pass back true
  }

  onCancel():void{
    this.dialogRef.close(false); // Close the dialog and pass back false
  }


}
