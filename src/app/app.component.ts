import { Component, inject } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import AOS from 'aos';
import { PageScrollComponent } from "./layout/page-scroll/page-scroll.component";
import { TitleService } from './service/title.service';
import { PreventHashActionDirective } from './directives/prevent-hash-action.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PreventHashActionDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kelechiugoh-angular';
  isLoading: boolean = true
  private titleService = inject(TitleService);

  constructor(private router: Router) {
    
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateFavicon(event.urlAfterRedirects);
      }
    });
  }

  ngOnInit() {
    this.titleService.init()
    AOS.init();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
      } else if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.isLoading = false;
        }, 200);
      }
    });
  }

  updateFavicon(route: string) {
    let faviconPath = 'assets/img/logo/fav-logo5.png'; // Default to Human Rights Advocacy

    if (route.includes('/index-2')) {
      faviconPath = 'assets/img/logo/fav-logo2.png';
    } else if (route.includes('/index-3')) {
      faviconPath = 'assets/img/logo/fav-logo3.png';
    } else if (route.includes('/index-4')) {
      faviconPath = 'assets/img/logo/fav-logo4.png';
    } else if (route.includes('/home') || route === '/' || route.includes('/index-5')) {
      // Keep fav-logo5 for home and legacy index-5 routes
      faviconPath = 'assets/img/logo/fav-logo5.png';
    } else if (route.includes('/index')) {
      faviconPath = 'assets/img/logo/fav-logo1.png';
    }

    // Find existing favicon element or create a new one
    let link = document.querySelector<HTMLLinkElement>("link[rel='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }

    link.href = faviconPath + `?v=${new Date().getTime()}`; // Cache busting
  }
  

}
