import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserInterface } from 'src/app/shared/interface/user';


@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})

export class LoginDialogComponent implements OnInit {
  public loginForm: FormGroup;
  public mail: string;
  public password: string;

  constructor(private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<LoginDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public userData: UserInterface) {
     }

  ngOnInit() {
    this.mail = this.userData.mail;
    this.password = this.userData.password;

    this.loginForm = this.formBuilder.group({
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

  onSaveData(): void  {
    this.dialogRef.close(this.userData);
  }

}
