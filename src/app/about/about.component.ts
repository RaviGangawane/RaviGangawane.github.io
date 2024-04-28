import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {


  lastName = "Gangawane";
  firstName = "Ravi";
  mobNo = "+91 9518525051";
  gmail = "ravi.d.gangawane@gmail.com";
  location = "Pune, Maharashtra, India";
  locationIndia = "India";

  linkedin = "https://www.linkedin.com/in/ravi-d-gangawane/"

  position = "Angular Developer";

  devExperience = "7+";
  trainingExperience = "10+";
  devExperienceExp = `As a professional developer with more than ${this.devExperience} years of
  experience, I have the skills to make your project a success.`;

  trainingExperienceExp = `With ${this.trainingExperience} years experience as a professional trainer, 300+ students I trained them and they
  got good jobs in MNC Companies.`;

  aboutMe = `I am a software engineer. I am a professional computer programmer, who can build absolutely anything.
  I am an extremely trustworthy person and I follow business ethics very strictly. I am a very
  disciplined, time punctual, and process-loving person. I love to create processes for increasing the
  company's overall growth. I am open to adapt any constructive changes and challenges throughout my
  life. I am very transparent and clear about my opinions. I see myself as a good leader, for the
  reason; I create leaders. I am a creative person, who tries to bring creativity to all dimensions of
  living life.`;

  btnName = "Download CV";

  blockquote = `“Creativity and Innovation is my passion. I love to code, teach code and sell code. From the
  college itself, I have started to build and sell software for local shops. After graduation, I
  have worked as a freelancer for some time.”`



  // <!-- <p> My training methodology focuses on developing
  // individuals' skills by providing them with the necessary knowledge and tools to succeed. I
  // also provide them with personalized guidance and support to help them reach their goals. My
  // students have been successful at achieving their career goals.</p> -->

}
