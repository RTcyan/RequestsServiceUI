import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-sign-in-dialog',
  templateUrl: './sign-in-dialog.component.html',
  styleUrls: ['./sign-in-dialog.component.scss']
})
export class SignInDialogComponent implements OnInit {

  public signInForm = this.fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(public dialogRef: MatDialogRef<any>,
    private fb: FormBuilder,) { }

  ngOnInit() {
  }

  public onEnterButtonClick() {
    
  }
}
