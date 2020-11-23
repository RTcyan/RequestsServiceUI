import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SignInDialogComponent } from './sign-in-dialog/sign-in-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  public onLoginButtonClick() {
    this.dialog.open<SignInDialogComponent>(SignInDialogComponent);
  }

}
