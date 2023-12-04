import { Component, EventEmitter } from '@angular/core';
import { ProjectsService } from 'src/app/shared/projects.service';

@Component({
  selector: 'app-projects-portfolio',
  templateUrl: './projects-portfolio.component.html',
  styleUrls: ['./projects-portfolio.component.scss']
})
export class ProjectsPortfolioComponent {
  projects:any;

  constructor(private projectsService : ProjectsService) {}

  ngOnInit(): void {
    this.getProjectsData();
  }

  getProjectsData() {
    this.projectsService.getProjects()
    .subscribe((res) => {
      this.projects = res;
    })
  }

  searchValue : string = '';

  searchTextChange : EventEmitter<string> = new EventEmitter<string>();
  searchPorject(){
    this.searchTextChange.emit(this.searchValue)
  }

}
