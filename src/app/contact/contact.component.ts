import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import $ from 'jquery';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  gmail = 'ravi.d.gangawane@gmail.com'

  constructor(private http: HttpClient) { }

  onSubmit() {
    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbx2tepBNsQsxyDEg61sEeyVqIY1G-nHCL8Ufh3gnbaNC_GevDY3LPLcJE8U3d642WLt/exec",
      method: "POST",
      dataType: "json",
      data: $(".contact_form1").serialize(),
      success: (response): any => {
        $('#contact-form').trigger("reset");
        alert('Thank you for contacting me.');

      }, error: (xhr, status, error) => {
        $('#contact-form').trigger("reset");
        alert('Thank you for contacting me.');
      }
    })
  }

}
