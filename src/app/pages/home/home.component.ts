import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  toggleMenu() {
    const wrapper = document.querySelector('.wrapper');
    if (wrapper) {
      wrapper.classList.toggle('collapse');
    }
  }
}
