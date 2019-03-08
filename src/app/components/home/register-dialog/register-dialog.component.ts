import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserInterface } from 'src/app/shared/interface/user';


@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss']
})
export class RegisterDialogComponent implements OnInit {
  public registerForm: FormGroup;
  public prenom: string;
  public mail: string;
  public password: string;


  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

constructor(private formBuilder: FormBuilder,
            private dialogRef: MatDialogRef<RegisterDialogComponent>,
            @Inject(MAT_DIALOG_DATA) public userData: UserInterface) {
     }

  ngOnInit() {
    this.prenom = this.userData.prenom;
    this.mail = this.userData.mail;
    this.password = this.userData.password;

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

  getErrorMessage() {
    return this.emailFormControl.hasError('required') ? 'Vous devez entrer une adresse valide' :
        this.emailFormControl.hasError('email') ? 'Adresse non valide:' :
            '';
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  onSaveData(): void  {
    this.dialogRef.close(this.userData);
  }

}
