import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AuthenticationRepository } from 'app/dao-module/repository/authentication.repository';
import { SignInDialogComponent, SignInDialogComponentData } from './sign-in-dialog/sign-in-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private authRepository: AuthenticationRepository,
  ) { }

  ngOnInit() {
  }

  public onLoginButtonClick() {
    const dialogRef = this.dialog.open<SignInDialogComponent>(SignInDialogComponent);
    dialogRef.afterClosed().subscribe((data: SignInDialogComponentData) => {
      this.authRepository.signin(data.login, data.password).subscribe((it) => {
        console.log(it);
      });
    }) 
  }

}
