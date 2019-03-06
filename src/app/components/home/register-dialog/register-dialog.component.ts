import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import * as EmailValidator from 'email-validator';


@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss']
})
export class RegisterDialogComponent implements OnInit {
  public registerForm: FormGroup;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<RegisterDialogComponent>) {
     }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: [
        '',
        [Validators.required, Validators.minLength(2)]
      ],
      mail: [
        '',
        [Validators.email]
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(6)]
      ]
    });
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

}
