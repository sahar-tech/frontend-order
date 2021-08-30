import { Component, OnInit } from '@angular/core';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {

  
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  personf() {
   
    (document.getElementById('personbtn')as any).classList.add("active");
    (document.getElementById('person')as any).style.display = "flex";
    (document.getElementById('entreprice')as any).style.display = "none";
    (document.getElementById('entrepricebtn')as any).classList.remove("active");
  }
  entrepricef() {

(document.getElementById('personbtn')as any).classList.remove("active");
    (document.getElementById('entrepricebtn')as any).classList.add("active");
    (document.getElementById('entreprice')as any).style.display = "flex";
    (document.getElementById('person')as any).style.display = "none";
    


}
}
