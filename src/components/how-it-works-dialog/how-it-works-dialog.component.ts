import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-how-it-works-dialog',
  templateUrl: './how-it-works-dialog.component.html',
  styleUrls: ['./how-it-works-dialog.component.css']
})
export class HowItWorksDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<HowItWorksDialogComponent>) { }

  ngOnInit(): void {
  }

}
