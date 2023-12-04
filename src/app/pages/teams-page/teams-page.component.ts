import { Component } from '@angular/core';

interface Person {
  avatar : string;
  name : string;
  education : string;
  experience? : string;
}

@Component({
  selector: 'app-teams-page',
  templateUrl: './teams-page.component.html',
  styleUrls: ['./teams-page.component.scss']
})
export class TeamsPageComponent {
  teamFoundres: any;
  rdTeam: any;

  constructor() {
    this.teamFoundres = this.persons.slice(0, 3);
    this.rdTeam = this.persons.slice(3);
  }

  ngOnInit(): void {

  }

  persons : Person[] = [
    {
      avatar : '/assets/images/team/pic1.jpg',
      name: 'Sanjay Ranjan',
      education: 'B.Tech',
      experience: '12 Years of Experience'
    },
    {
      avatar : '/assets/images/team/pic2.jpg',
      name: 'Neeta Sinha',
      education: 'M.A. (Magadh University)',
      experience: '28 Years of Experience'
    },
    {
      avatar : '/assets/images/team/pic3.jpg',
      name: 'Srishti',
      education: 'Pursuing PhD from IITP',
      experience: '5+ Years of Experience'
    },
    {
      avatar : '/assets/images/team/pic4.jpg',
      name: 'Praveen Ranjan',
      education: 'B.Tech (IIT BBS)',
      experience: '10 Years of Experience'
    },
    {
      avatar : '/assets/images/team/pic5.jpg',
      name: 'Abhishek Kumar',
      education: 'Marine Engineer (TS Chanakya)',
      experience: '7+ Years of Experience'
    },
    {
      avatar : '/assets/images/team/pic6.jpg',
      name: 'Adwait Thakur',
      education: 'B.Tech Manipal',
      experience: '6 Years of Experience'
    },
    {
      avatar : '/assets/images/team/pic7.jpg',
      name: 'Bageshwer Yadav',
      education: 'B.Tech NIT Srinagar',
      experience: '1 Years of Experience'
    },
    {
      avatar : '/assets/images/team/pic8.jpg',
      name: 'Bageshwer Yadav',
      education: 'B.Tech IIT Patna'
    },
    {
      avatar : '/assets/images/team/pic9.jpg',
      name: 'Harshita Meena',
      education: 'B.Tech IIT Patna'
    },
    {
      avatar : '/assets/images/team/pic10.jpg',
      name: 'Fersha',
      education: 'B.Tech IIT Patna'
    },
    {
      avatar : '/assets/images/team/pic11.jpg',
      name: 'Hritik Kumar',
      education: 'B.Tech IIT Patna'
    }
  ];
  


}
