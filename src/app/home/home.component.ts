import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  lastName = "Gangawane..."
  firstName = "Ravi"
  // mobNo = "+91 9518525051"
  mobNo = "+91 9130451715"

  gmail = "ravi.d.gangawane@gmail.com"
  location = "India";
  position = "Angular Developer"

}
