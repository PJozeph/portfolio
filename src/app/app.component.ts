import { Component } from '@angular/core';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  imports: [ HeaderComponent, AboutMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'freelance-portfolio';
}
