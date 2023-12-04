import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-home',
  templateUrl: './welcome-home.component.html',
  styleUrls: ['./welcome-home.component.scss']
})
export class WelcomeHomeComponent {
  images: string[] = [
    '/assets/images/welcome-images/img1.svg',
    '/assets/images/welcome-images/img2.svg',
    '/assets/images/welcome-images/img3.svg',
    '/assets/images/welcome-images/img4.svg',
    '/assets/images/welcome-images/img5.svg',
    '/assets/images/welcome-images/img6.svg',
    '/assets/images/welcome-images/img7.svg',
  ];

  selectedImage : string = '';

  constructor() {}

  ngOnInit(): void {
    this.getRandomImage();
  }
  
  getRandomImage() {
    const randomIndex = Math.floor(Math.random() * this.images.length);
    this.selectedImage = this.images[randomIndex];
  }

}
