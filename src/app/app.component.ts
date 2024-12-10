import { Component } from '@angular/core';
import { AboutMeMoreComponent } from './components/about-me-more/about-me-more.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MyExperienceComponent } from './components/my-experience/my-experience.component';
import { MySkillsComponent } from './components/my-skills/my-skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';

@Component({
    selector: 'app-root',
    imports: [
        HeaderComponent,
        AboutMeComponent,
        MySkillsComponent,
        MyExperienceComponent,
        MyExperienceComponent,
        AboutMeMoreComponent,
        ProjectsComponent,
        TestimonialComponent,
        ContactComponent,
        FooterComponent,
        FooterComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.less',
})
export class AppComponent {
    title = 'freelance-portfolio';
}
