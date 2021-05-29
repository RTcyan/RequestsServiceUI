import { Component, DoCheck, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AuthenticationRepository } from 'app/dao-module/repository/authentication.repository';
import { UserRepository } from 'app/dao-module/repository/user.repository';
import { SignUpUser } from 'app/model-module/model/user/sign-up-user';
import { SecurityContextHolder } from 'app/security-module/context/security-context-holder';
import { SignInDialogComponent, SignInDialogComponentData } from './sign-in-dialog/sign-in-dialog.component';
import { SignUpDialogComponent } from './sign-up-dialog/sign-up-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private authRepository: AuthenticationRepository,
    private userRepository: UserRepository,
    public context: SecurityContextHolder,
  ) { }

    
  ngOnInit() {
  }

  public onLogoutButtonClick() {
    this.authRepository.logout();
  }

  public onLoginButtonClick() {
    const dialogRef = this.dialog.open<SignInDialogComponent>(SignInDialogComponent);
    dialogRef.afterClosed().subscribe((data: SignInDialogComponentData) => {
      if (data) {
        this.authRepository.signIn(data.login, data.password).subscribe((it) => {
        });
      }
    });
  }

  public onSignUpButtonClick() {
    const dialogRef = this.dialog.open<SignUpDialogComponent>(SignUpDialogComponent);
    dialogRef.afterClosed().subscribe((userModel: SignUpUser) => {
      if (userModel) {
        this.userRepository.signUp(userModel).subscribe(() => {
        })
      } 
    });
    
  }

}
