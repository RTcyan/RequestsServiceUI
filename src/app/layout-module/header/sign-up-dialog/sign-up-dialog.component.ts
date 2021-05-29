import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { SignUpUser } from 'app/model-module/model/user/sign-up-user';
import { CustomValidator } from './CustomValidator';

@Component({
  selector: 'app-sign-up-dialog',
  templateUrl: './sign-up-dialog.component.html',
  styleUrls: ['./sign-up-dialog.component.scss']
})
export class SignUpDialogComponent implements OnInit{

  public grads = [1, 2, 3, 4];
  
  public signUpForm = this.fb.group({
  });

  constructor(
    public dialogRef: MatDialogRef<any>,
    private fb: FormBuilder,
    ) { }

  ngOnInit() {

  }

  public onEnterButtonClick() {
    const data: SignUpUser = this.signUpForm.value as SignUpUser
    this.dialogRef.close(data);
  }
}
