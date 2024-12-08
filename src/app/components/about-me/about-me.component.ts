import { DOCUMENT } from '@angular/common';
import {
  afterRender,
  Component,
  ElementRef,
  Inject,
  inject,
  OnInit,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.less',
})
export class AboutMeComponent implements OnInit {
  private meta: Meta = inject(Meta);
  private title: Title = inject(Title);

  constructor(elementRef: ElementRef) {
    afterRender(() => {
      elementRef.nativeElement.querySelector('input')?.focus();
      const schema = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Jozsef Pallagi',
        jobTitle: 'Full Stack Developer',
        url: 'https://your-website-url.com',
        sameAs: [
          'https://www.linkedin.com/in/jozsef-pallagi',
          'https://github.com/jozsef-pallagi',
        ],
        worksFor: {
          '@type': 'Organization',
          name: 'Freelance',
        },
        skills: ['Angular', 'Java', 'Full Stack Development'],
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  }

  ngOnInit(): void {
    this.title.setTitle(
      'Full Stack Freelance Developer - Angular & Java Specialist | Jozsef Pallagi'
    );
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Experienced Full Stack Developer specialized in Angular and Java. Available for freelance projects to build scalable and robust applications.',
      },
      { name: 'author', content: 'Jozsef Pallagi' },
      {
        name: 'keywords',
        content:
          'Full Stack Developer, Freelance, Angular, Java, Scalable Applications',
      },
    ]);
  }
}
