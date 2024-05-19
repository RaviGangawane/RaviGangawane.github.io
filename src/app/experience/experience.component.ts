import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
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
  newDate!: Date;
  experienceList = [
    {
      startDate: new Date(2024, 1, 27),
      endDate: new Date(),
      totalPeriod: this.calculateYearMonth(new Date(2024, 1, 27), new Date()),

      coWebsiteLink: 'https://www.nitorinfotech.com/',
      coLogo: '/../assets/images/logo/nitorinfotech_logo.jpeg',
      coWebsiteLinkImg: '/../assets/images/logo/nitorinfotech_website.jpeg',
      coWebsiteLinkTitle: `We’re happy to announce that Nitor Infotech is now part of the Ascendion!`,
      coName: 'Nitor Infotech',
      jobRole: 'Lead Engineer',
      Skills: ['Angular', 'HTML5']
    },
    {
      startDate: new Date(2022, 4, 5),
      endDate: new Date(2024, 3, 5),
      totalPeriod: this.calculateYearMonth(new Date(2022, 4, 5), new Date(2024, 3, 5)),
      coWebsiteLink: 'https://www.ltimindtree.com/',
      coLogo: '/../assets/images/logo/ltimindtree_logo.jpeg',
      coWebsiteLinkImg: '/../assets/images/logo/ltimindtree_website.jpeg',
      coWebsiteLinkTitle: `LTIMindtree - Technology Consulting and Digital Solutions Company`,
      coName: 'LTIMindtree Ltd.',
      jobRole: 'Software Engineer specialist',
      Skills: ['Angular', 'HTML5']
    },
    {
      startDate: new Date(2022, 4, 5),
      endDate: new Date(2024, 3, 5),
      totalPeriod: this.calculateYearMonth(new Date(2022, 4, 5), new Date(2024, 3, 5)),
      coWebsiteLink: 'https://www.mindtree.com/',
      coLogo: '/../assets/images/company-fav/mindtree.png',
      coWebsiteLinkImg: '/../assets/images/logo/mindtree_website.jpeg',
      coWebsiteLinkTitle: `Mindtree Ltd.`,
      coName: 'Mindtree Ltd.',
      jobRole: 'Module Lead',
      Skills: ['Angular', 'HTML5']
    },
    {
      startDate: new Date(2019, 8, 2),
      endDate: new Date(2022, 3, 30),
      totalPeriod: this.calculateYearMonth(new Date(2019, 8, 2), new Date(2022, 3, 30)),
      coWebsiteLink: 'https://www.cybage.com/',
      coLogo: '/../assets/images/logo/cybage_logo.jpeg',
      coWebsiteLinkImg: '/../assets/images/logo/cybage_website.jpeg',
      coWebsiteLinkTitle: `Digital Product Engineering Services & Digital Transformation Consulting`,
      coName: ' Cybage Software Pvt. Ltd.',
      jobRole: 'Senior Software Engineer',
      Skills: ['Angular', 'HTML5']
    },
    {
      startDate: new Date(2017, 0, 5),
      endDate: new Date(2019, 7, 5),
      totalPeriod: this.calculateYearMonth(new Date(2017, 0, 5), new Date(2019, 7, 6)),
      coWebsiteLink: 'https://www.melayer.com/',
      coLogo: '/../assets/images/company-fav/melayer.jpeg',
      coWebsiteLinkImg: '/../assets/images/logo/melayer_website.webp',
      coWebsiteLinkTitle: `Melayer Software Solution LLP.`,
      coName: 'Melayer Software Solution LLP.',
      jobRole: 'Software Developer',
      Skills: ['Angular', 'HTML5']
    },
    {
      startDate: new Date(2015, 0, 5),
      endDate: new Date(2016, 11, 5),
      totalPeriod: this.calculateYearMonth(new Date(2015, 0, 5), new Date(2016, 11, 5)),
      coName: 'Mahatma Phule madyamic vidhalay , Lavale',
      jobRole: 'Teacher (ICT)',
      Skills: ['ICT', 'Teaching Experience ']
    },
  ]

  ngOnInit() {
    this.newDate = new Date();
    console.log('this.newDate', this.newDate, this.experienceList[0].endDate)
  }


  calculateYearMonth(startDate: Date, endDate: Date) {
    if (startDate > endDate) {
      [startDate, endDate] = [endDate, startDate]; // swap values
    }

    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth();
    const endYear = endDate.getFullYear();
    const endMonth = endDate.getMonth() + 1;

    let yearsDiff = endYear - startYear;
    let monthsDiff = endMonth - startMonth;

    if (monthsDiff < 0) {
      yearsDiff--;
      monthsDiff += 12;
    }

    // return { years: yearsDiff, months: monthsDiff };
    return `${yearsDiff} years and ${monthsDiff} months`
  }



}
