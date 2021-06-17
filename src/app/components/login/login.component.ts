import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationComponent } from '../registration/registration.component';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isRemember: any;
  hide: any;
  password: any;
  matcher = new MyErrorStateMatcher();
  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);

  usernameControl = new FormControl('', [
    Validators.required,
  ]);

  constructor(public dialog: MatDialog, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, private route: ActivatedRoute,
    private router: Router) {
    this.matIconRegistry.addSvgIcon(
      "alert",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icon--alert.svg")
    );
  }

  ngOnInit() {
  }

  login() {
    console.log(this.passwordFormControl.errors)
    console.log(this.passwordFormControl.hasError('required'))
    this.router.navigate(['/view']);

  }

  openDialog(type: string) {
    if (type == 'register') {
      this.dialog.open(RegistrationComponent);
    }
  }

}
