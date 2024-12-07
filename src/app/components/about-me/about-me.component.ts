import { Component, inject, OnInit } from '@angular/core';
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

  ngOnInit(): void {}
}
