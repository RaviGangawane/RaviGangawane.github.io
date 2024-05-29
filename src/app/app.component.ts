import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { ServicesComponent } from './services/services.component';
import { WorkComponent } from './work/work.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    CarouselModule,
    MainComponent,
    HomeComponent,
    ServicesComponent,
    WorkComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    TestimonialsComponent,
    ExperienceComponent,
    HeaderComponent,
    SkillsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor() {
  }

}
