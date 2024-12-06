import { Component } from '@angular/core';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { HeaderComponent } from './components/header/header.component';
import { MySkillsComponent } from './components/my-skills/my-skills.component';
import { MyExperienceComponent } from './components/my-experience/my-experience.component';
import { AboutMeMoreComponent } from './components/about-me-more/about-me-more.component';
import { ProjectsComponent } from './components/projects/projects.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    AboutMeComponent,
    MySkillsComponent,
    MyExperienceComponent,
    MyExperienceComponent,
    AboutMeMoreComponent,
    ProjectsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  title = 'freelance-portfolio';
}
