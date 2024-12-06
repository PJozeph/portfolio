import { Component } from '@angular/core';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { HeaderComponent } from './components/header/header.component';
import { MySkillsComponent } from './components/my-skills/my-skills.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, AboutMeComponent, MySkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  title = 'freelance-portfolio';
}
