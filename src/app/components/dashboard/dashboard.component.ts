import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: any;
  displayedColumns: string[] = ['Date', 'Incident Type', 'Status'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  //data: [] ;

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      "alert",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icon--alert.svg")
    );
  }
  ngOnInit() {
  }

}
