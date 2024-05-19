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
      skillPer: '75%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:75%;`
    },
    {
      skillName: 'Less/Sass/Scss',
      skillPer: '80%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:80%;`
    }, {
      skillName: 'Version Control / Git',
      skillPer: '60%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:60%;`
    }, {
      skillName: 'Responsive Design',
      skillPer: '95%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:95%;`
    }, {
      skillName: 'Bowoser Developer Tool',
      skillPer: '80%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:80%;`
    }, {
      skillName: 'Web Performance',
      skillPer: '80%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:80%;`
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
      skillPer: '80%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:80%;`
    }, {
      skillName: 'Foundation',
      skillPer: '40%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:40%;`
    }, {
      skillName: 'Material Design for Bootstrap 5 & 4',
      skillPer: '60%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:60%;`
    }, {
      skillName: 'Angular powered Bootstrap',
      skillPer: '95%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:95%;`
    }, {
      skillName: 'Materialize',
      skillPer: '60%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:60%;`
    }, {
      skillName: 'Angular Material',
      skillPer: '95%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:95%;`
    },
    // {
    //   skillName: ' React',
    //   skillPer: '20%',
    //   ngStyle: `background-color: ${this.getRandomColor()}; width:20%;`
    // },
    {
      skillName: 'Node.JS',
      skillPer: '40%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:40%;`
    },
    //  {
    //   skillName: ' Nativescript',
    //   skillPer: '20%',
    //   ngStyle: `background-color: ${this.getRandomColor()}; width:20%;`
    // },
  ]

  listManagerial = [
    {
      skillName: 'TEAM MANAGEMENT',
      skillPer: '75%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:75%;`
    },
    {
      skillName: 'CONSULTATION',
      skillPer: '80%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:80%;`
    },
    {
      skillName: 'TRAINING',
      skillPer: '95%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:95%;`
    }, {
      skillName: 'COMMUNICATION',
      skillPer: '75%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:75%;`
    }, {
      skillName: 'TEAMWORK ',
      skillPer: '80%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:80%;`
    }, {
      skillName: 'CREATIVITY ',
      skillPer: '80%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:80%;`
    }, {
      skillName: 'WILLINGNESS TO LEARN ',
      skillPer: '80%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:80%;`
    },
    {
      skillName: 'PROBLEM-SOLVEING',
      skillPer: '80%',
      ngStyle: `background-color: ${this.getRandomColor()}; width:80%;`
    }

  ]

  getRandomColor() {
    return '#000000'
    // return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  }




}
