import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  imports: [],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.less',
})
export class TestimonialComponent {
  openLink(link: string): void {
    window.open(link, '_blank');
  }
}
