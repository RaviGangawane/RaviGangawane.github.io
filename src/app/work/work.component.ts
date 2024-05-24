import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {


  projects = [
    {
      pName: 'www.codekul.com ',
      pDesc: 'materail UI',
      pStartDate: '',
      pEndDate: '',
      pTeamCount: '',
      techStack: ''
    },
    {
      pName: 'Codekul admin panle',
      pDesc: 'with materail UI',
      pStartDate: '',
      pEndDate: '',
      pTeamCount: '',
      techStack: ''
    },
    {
      pName: 'Code job ',
      pDesc: 'with materail UI',
      pStartDate: '',
      pEndDate: '',
      pTeamCount: '',
      techStack: ''
    },
    {
      pName: 'Code job admin panel',
      pDesc: 'with materail UI',
      pStartDate: '',
      pEndDate: '',
      pTeamCount: '',
      techStack: ''
    },
    {
      pName: 'SANSKRUTIK BHAWAN',
      pDesc: 'with materail UI',
      pStartDate: '',
      pEndDate: '',
      pTeamCount: '',
      techStack: ''
    },
    {
      pName: 'Melayer.com',
      pDesc: 'with materail UI',
      pStartDate: '',
      pEndDate: '',
      pTeamCount: '',
      techStack: ''
    },
    {
      pName: 'TRAKOBA',
      pDesc: 'with materail UI',
      pStartDate: '',
      pEndDate: '',
      pTeamCount: '',
      techStack: ''
    },
    {
      pName: 'HELIX PRO',
      pDesc: 'with materail UI',
      pStartDate: '',
      pEndDate: '',
      pTeamCount: '',
      techStack: ''
    },
    {
      pName: 'E-BILLING',
      pDesc: 'with materail UI',
      pStartDate: '',
      pEndDate: '',
      pTeamCount: '',
      techStack: ''
    },
    {
      pName: 'LOOKOUT / club trap',
      pDesc: 'with materail UI',
      pStartDate: '',
      pEndDate: '',
      pTeamCount: '',
      techStack: ''
    },
    {
      pName: 'LOTR Admin',
      pDesc: 'with materail UI',
      pStartDate: '',
      pEndDate: '',
      pTeamCount: '',
      techStack: ''
    },

    {
      pName: 'LOTR Search',
      pDesc: 'with materail UI',
      pStartDate: '',
      pEndDate: '',
      pTeamCount: '',
      techStack: ''
    },


    {
      pName: 'Land Title and Survey Authority of British Columbia (LTSA)',
      pDesc: 'with materail UI',
      pStartDate: '',
      pEndDate: '',
      pTeamCount: '',
      techStack: ''
    },

    {
      pName: 'Delta Airline (Operations)',
      pDesc: 'with materail UI',
      pStartDate: '',
      pEndDate: '',
      pTeamCount: '',
      techStack: ''
    },



  ]

  ngOnInit() {
    this.projects.reverse()
  }

}
