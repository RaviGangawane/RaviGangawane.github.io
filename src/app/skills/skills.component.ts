import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  listTechnical = [
    {
      skillName: 'HTML5 / CSS3',
      skillPer: '95%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:95%;`
    },
    {
      skillName: 'JavaScript',
      skillPer: '95%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:95%;`
    },
    {
      skillName: 'Less/Sass/Scss',
      skillPer: '95%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:95%;`
    }, {
      skillName: 'Version Control / Git',
      skillPer: '95%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:95%;`
    }, {
      skillName: 'Responsive Design',
      skillPer: '95%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:95%;`
    }, {
      skillName: 'Bowoser Developer Tool',
      skillPer: '95%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:95%;`
    }, {
      skillName: 'Web Performance',
      skillPer: '95%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:95%;`
    },

  ]

  listFramework = [
    {
      skillName: 'Angular 5, 7, 8',
      skillPer: '95%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:95%;`
    },
    {
      skillName: 'CSS FRAMEWORKS100',
      skillPer: '95%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:95%;`
    }, {
      skillName: 'Bootstrap 3, 4, 5',
      skillPer: '95%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:95%;`
    }, {
      skillName: 'Foundation',
      skillPer: '95%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:95%;`
    }, {
      skillName: 'Material Design for Bootstrap 5 & 4',
      skillPer: '95%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:95%;`
    }, {
      skillName: 'Angular powered Bootstrap',
      skillPer: '95%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:95%;`
    }, {
      skillName: 'Materialize',
      skillPer: '95%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:95%;`
    }, {
      skillName: 'Angular Material',
      skillPer: '95%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:95%;`
    }, {
      skillName: ' React',
      skillPer: '95%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:95%;`
    }, {
      skillName: 'Node.JS',
      skillPer: '95%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:95%;`
    }, {
      skillName: ' Nativescript',
      skillPer: '95%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:95%;`
    },
  ]

  listManagerial = [
    {
      skillName: 'TEAM MANAGEMENT',
      skillPer: '95%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:95%;`
    },
    {
      skillName: 'CONSULTATION',
      skillPer: '95%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:95%;`
    },
    {
      skillName: 'TRAINING',
      skillPer: '95%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:95%;`
    }, {
      skillName: 'COMMUNICATION8',
      skillPer: '95%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:95%;`
    }, {
      skillName: 'RTEAMWORK ',
      skillPer: '95%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:95%;`
    }, {
      skillName: 'CREATIVITY ',
      skillPer: '95%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:95%;`
    }, {
      skillName: 'WILLINGNESS TO LEARN1 ',
      skillPer: '95%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:95%;`
    },
    {
      skillName: 'PROBLEM-SOLVEING',
      skillPer: '95%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:95%;`
    }

  ]

  getRandomColor() {
    return '#000000'
    // return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  }




}
