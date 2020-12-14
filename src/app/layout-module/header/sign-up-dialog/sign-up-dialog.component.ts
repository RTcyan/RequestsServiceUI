import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { FacultyRepository } from 'app/dao-module/repository/faculties.repository';
import { Faculty } from 'app/model-module/model/faculty/faculty';
import { SignUpUser } from 'app/model-module/model/user/sign-up-user';
import { CustomValidator } from './CustomValidator';

@Component({
  selector: 'app-sign-up-dialog',
  templateUrl: './sign-up-dialog.component.html',
  styleUrls: ['./sign-up-dialog.component.scss']
})
export class SignUpDialogComponent implements OnInit{

  public grads = [1, 2, 3, 4];

  public faculties: Faculty[];
  
  public signUpForm = this.fb.group({
    login: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
    firstName: ['', Validators.required],
    surname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    startEducation: ['', [Validators.required, CustomValidator.isValidDate]],
    numberStudentCard: ['', [Validators.required, CustomValidator.numeric]],
    grad: ['', [Validators.required, CustomValidator.numeric]],
    facultyID: ['', Validators.required],
  });

  constructor(
    public dialogRef: MatDialogRef<any>,
    private fb: FormBuilder,
    private facultyRepository: FacultyRepository,
    ) { }

  ngOnInit() {
    this.facultyRepository.getFaculties().subscribe((faculties: Faculty[]) => {
      this.faculties = faculties;
    })
  }

  public onEnterButtonClick() {
    const data: SignUpUser = this.signUpForm.value as SignUpUser
    this.dialogRef.close(data);
  }
}
