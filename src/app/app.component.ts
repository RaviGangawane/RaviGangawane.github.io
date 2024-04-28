import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { WorkComponent } from './work/work.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HeaderComponent } from './header/header.component';
import { ScrollSpyDirective } from './scroll-spy.directive';
import { LoremIpsumComponent } from './lorem-ipsum.component';
import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,
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
    LoremIpsumComponent,
    ScrollSpyDirective,
    SkillsComponent

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'website';
  currentSection = 'section1';

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  constructor(private ref: ElementRef) {

  }

  scrollTo(section: string) {
    console.log('section', section)
    this.ref.nativeElement.scrollIntoView({ behavior: 'smooth' });
    this.ref.nativeElement.querySelector('#' + section).scrollTo();
    console.log('===>', this.ref.nativeElement.querySelector('#' + section))

  }



  isShow: boolean = false;
  topPosToStartShowing = 100;

  @HostListener('window:scroll')
  checkScroll() {

    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll] ===>', scrollPosition);

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
