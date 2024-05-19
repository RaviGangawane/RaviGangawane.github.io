import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ServicesComponent } from '../services/services.component';
import { WorkComponent } from '../work/work.component';
import { AboutComponent } from '../about/about.component';
import { BlogComponent } from '../blog/blog.component';
import { ExperienceComponent } from '../experience/experience.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { ContactComponent } from '../contact/contact.component';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CarouselModule,
    HomeComponent,
    ServicesComponent,
    WorkComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    TestimonialsComponent,
    ExperienceComponent,
    HeaderComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
