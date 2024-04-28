import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  aboutExp = `Hello there! My name is Ravi Gangawane.
  I am a web developer & Angular developer.
  I'm very passionate and dedicated to my work. 
  I have a strong understanding of HTML, CSS, JavaScript and the Angular Framework. 
  I am also experienced in developing responsive websites using Bootstrap. 
  I believe my skills and experience make me an ideal candidate for this job.`;

  resumeLink = '/../assets/resume/Ravi Gangawane Feb 2024.pdf'
  // experienceList: any = [];
  experienceList = [
    {
      starDate: '2024',
      endDate: 'Present',
      coWebsiteLink: 'https://www.nitorinfotech.com/',
      coLogo: '/../assets/images/company-fav/favicon.webp',
      coName: 'Nitor Infotech',
      jobRole: 'Lead Engineer',
    },
    {
      starDate: '2022',
      endDate: '2024',
      coWebsiteLink: 'https://www.ltimindtree.com/',
      coLogo: '/../assets/images/company-fav/LT-Favicon.svg',
      coName: 'LTIMindtree Ltd.',
      jobRole: 'Software Engineer specialist',
    },
    {
      starDate: '2022',
      endDate: '2024',
      coWebsiteLink: 'https://www.mindtree.com/',
      coLogo: '/../assets/images/company-fav/mindtree.png',
      coName: 'Mindtree Ltd.',
      jobRole: 'Module Lead',
    },
    {
      starDate: '2019',
      endDate: '2022',
      coWebsiteLink: 'https://www.cybage.com/',
      coLogo: '/../assets/images/company-fav/favicon.ico',
      coName: ' Cybage Software Pvt. Ltd.',
      jobRole: 'Senior Software Engineer',
    },
    {
      starDate: '2017',
      endDate: '2019',
      coWebsiteLink: 'https://www.melayer.com/',
      coLogo: '/../assets/images/company-fav/melayer.jpeg',
      coName: 'Melayer Software Solution LLP.',
      jobRole: 'Software Developer',
    },
  ]
}
