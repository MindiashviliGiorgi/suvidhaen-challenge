import { Component } from '@angular/core';
import { ProjectsService } from 'src/app/shared/projects.service';

@Component({
  selector: 'app-projects-home',
  templateUrl: './projects-home.component.html',
  styleUrls: ['./projects-home.component.scss']
})
export class ProjectsHomeComponent {
  projects: any;
  
  constructor (private projectsService : ProjectsService) {}

  ngOnInit(): void {
    this.getProjectsData();
  }

  getProjectsData() {
    this.projectsService.getProjects()
    .subscribe((res) => {
      this.projects = res;
    })
  }

}
