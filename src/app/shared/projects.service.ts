import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projectsDataUrl = '/assets/projects-data.json';

  constructor(private http : HttpClient) { }

  getProjects() {
    return this.http.get(this.projectsDataUrl);
  }

}
