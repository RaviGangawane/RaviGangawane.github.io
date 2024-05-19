import { Component, OnInit } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed-js';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgxTypedJsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  lastName = "Gangawane...";
  firstName = "Ravi";
  // mobNo = "+91 9518525051"
  mobNo = "+91 9130451715";

  gmail = "ravi.d.gangawane@gmail.com";
  location = "India";
  position = "Angular Developer";

  ngOnInit() {

  }

}
