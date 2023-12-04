import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  header_variable : boolean = false;

  constructor() {};

  ngOnInit(): void {};

  @HostListener("document:scroll")
  scrollFunction() {
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);

    if (scrollValue > 3) {
      this.header_variable = true;
    } else {
      this.header_variable = false;
    }
  }
}
