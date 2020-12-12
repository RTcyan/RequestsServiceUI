import { Component, DoCheck, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AuthenticationRepository } from 'app/dao-module/repository/authentication.repository';
import { UserRepository } from 'app/dao-module/repository/user.repository';
import { AuthEmployee } from 'app/model-module/model/auth-user/AuthEmployee';
import { AuthUser } from 'app/model-module/model/auth-user/AuthUser';
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

    public currentEmployee: AuthEmployee;
    
  ngOnInit() {
    this.context.user.subscribe((user: AuthUser) => {
      if(user) {
        this.currentEmployee = user.employee;
      }
    })
  }

  public onLogoutButtonClick() {
    this.authRepository.logout();
  }

  public onLoginButtonClick() {
    const dialogRef = this.dialog.open<SignInDialogComponent>(SignInDialogComponent);
    dialogRef.afterClosed().subscribe((data: SignInDialogComponentData) => {
      this.authRepository.signin(data.login, data.password).subscribe((it) => {
      });
    });
  }

  public onSignUpButtonClick() {
    const dialogRef = this.dialog.open<SignUpDialogComponent>(SignUpDialogComponent);
    dialogRef.afterClosed().subscribe((userModel: SignUpUser) => {
      this.userRepository.signUp(userModel).subscribe(() => {
        console.log('hello');
      })
    });
    
  }

}
