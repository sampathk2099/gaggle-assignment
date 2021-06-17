import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MyErrorStateMatcher } from '../login/login.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  hide: any;
  password: any;
  matcher = new MyErrorStateMatcher();
  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);
  constructor(private matIconRegistry: MatIconRegistry,private domSanitizer: DomSanitizer,private route: ActivatedRoute,
    private router: Router){
    this.matIconRegistry.addSvgIcon(
      "saltire",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icon--saltire.svg"),
    );
    this.matIconRegistry.addSvgIcon(
      "alert",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icon--alert.svg"),
    );

  }
  ngOnInit() {
  }

  register()
  {
    this.router.navigate(['/login']);
  }

}
