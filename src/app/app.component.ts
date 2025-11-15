import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { signal, effect } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'angular-signals';
  theme = signal<'light' | 'dark'>('light');
  label = this.theme();

  constructor() {
    effect(() => {
      this.label = this.theme();
    });
  }

  toggleTheme() {
    this.theme.update((currentTheme) => 
      currentTheme === 'light' ? 'dark' : 'light'
    );
  }

  // change body html class name
  // document.body.className = this.theme();
}
