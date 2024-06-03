import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  gmail = 'ravi.d.gangawane@gmail.com'

  name: string = 'ravi a';
  email: string = 'ravi.d.gangawane@gmail.com';
  subject: string = 'subject';
  message: string = 'message';

  constructor(private http: HttpClient) { }

  submitForm() {
    const formData = {
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message
    };


    let headers = new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"
    });

    this.http.post('https://script.google.com/macros/s/AKfycbww5l8VTo_WXCXnxpjYnyLouif7S2RZHVpF3NXv0WadkgZmj2ZGEqrx0TkQgtP-BsLT/exec',
      formData, { headers: headers })
      .subscribe((response) => {
        console.log('Form submission successful:', response);
        // Reset form fields
        this.name = '';
        this.email = '';
        this.subject = '';
        this.message = '';
      }, (error) => {
        console.error('Form submission failed:', error);
        // Handle error
      });
  }




}
