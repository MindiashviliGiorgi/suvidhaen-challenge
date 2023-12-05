import { Component } from '@angular/core';

interface Job {
  avatar : string;
  position : string;
  experience : string;
  mode_of_work : string;
  salary_stipend : string;
}

@Component({
  selector: 'app-current-openings-page',
  templateUrl: './current-openings-page.component.html',
  styleUrls: ['./current-openings-page.component.scss']
})
export class CurrentOpeningsPageComponent {
  jobs: any;

  constructor() {
    this.jobs = this.jobsArray;
  };

  ngOnInit(): void {
    console.log(this.jobs)
  };

  jobsArray : Job[] = [
    {
      "avatar" : "/assets/images/jobs/android.jpg",
      "position": "Android Developer",
      "experience": "Fresher/Intern",
      "mode_of_work": "Work from Home",
      "salary_stipend": "As per industry standards"
    },
    {
      "avatar" : "/assets/images/jobs/python.png",
      "position": "Python Developer",
      "experience": "Fresher/Intern",
      "mode_of_work": "Work from Home",
      "salary_stipend": "As per industry standards"
    },
    {
      "avatar" : "/assets/images/jobs/fee.jpg",
      "position": "Front End Developer",
      "experience": "Fresher/Intern",
      "mode_of_work": "Work from Home",
      "salary_stipend": "As per industry standards"
    },
    {
      "avatar" : "/assets/images/jobs/iott.jpg",
      "position": "IoT hardware Developer",
      "experience": "Fresher/Intern",
      "mode_of_work": "Work from Home",
      "salary_stipend": "As per industry standards"
    }
  ]

}
