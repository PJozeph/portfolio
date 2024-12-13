import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { AboutMeMoreComponent } from './components/about-me-more/about-me-more.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MyExperienceComponent } from './components/my-experience/my-experience.component';
import { MySkillsComponent } from './components/my-skills/my-skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent implements OnInit {
  activatedRouter = inject(ActivatedRoute);
  destoryRef: DestroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.activatedRouter.fragment
      .pipe(filter(Boolean), takeUntilDestroyed(this.destoryRef))
      .subscribe((fragment) => {
        this.scrollToElement(fragment);
      });
  }

  scrollToElement(element: string): void {
    const el = document.getElementById(element);
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
