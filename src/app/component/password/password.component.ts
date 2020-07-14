import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Passwrd } from 'src/app/models/pwd';
import {
  FormGroup,
  Validators,
  FormControl,
  FormControlName,
} from '@angular/forms';


@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
pass: Passwrd;
alert: boolean = false;
pwdform: FormGroup = new FormGroup({});
get Password() {
  return this.pwdform.get('Password');
}
  constructor(public location: Location) { 
    this.setFormGroup();
  }

  ngOnInit(): void {
  }
  onSave() {
    if(this.pwdform.valid) {
    const FormObject = new Object(this.pwdform.value);
    this.alert = true;
    console.log('saved', this.pwdform.value);
    this.pwdform.reset();
    }
  }
  onClickClose(event) {
    this.location.back();
  }
 
  private setFormGroup() {
    this.pwdform = new FormGroup({
      Password: new FormControl("", [Validators.required, Validators.maxLength(8)])
    })
  }

  closeAlert() {
    this.alert = false;
  }
}
