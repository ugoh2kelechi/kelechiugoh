import { Component, Input, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLinkActive, CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styles: ``,
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent {
  @Input() logoImage: string = '';
  @Input() label: string = '';
  @Input() link: string = '#';
  @Input() btnClass: string = '';
  @Input() icon: string = '';
  @Input() btnParent: string = '';
  @Input() headerArea: string = '';
  @Input() headerElement: string = '';
  @Input() menuClass: string = '';
  @Input() container: boolean = false;
  @Input() buttonClass: string = '';

  homeMenuItems = [
    { title: 'Human Rights Advocacy', image: 'assets/img/demo/vl-demo-1.5.png', multiPageLink: '/', onePageLink: '/index-single-5' }
  ];


  eventMenuItems = [
    { title: 'Events', link: '/event' }
  ];

  blogMenuItems = [
    { title: 'Blog', link: '/blog' },
    { title: 'Blog Left', link: '/blog-left' },
    { title: 'Blog Right', link: '/blog-right' },
    { title: 'Blog Single', link: '/blog-single' }
  ];

  pageMenuItems = [
    { title: 'Our Services', link: '/services' },
    { title: 'Our Volunteers', link: '/volunteers' },
    { title: 'FAQ', link: '/faq' },
    { title: 'Contact', link: '/contact' },
    { title: '404', link: '/404' }
  ];

  causesPage = [
    { title: 'Causes', link: '/causes' },
    { title: 'Causes Left', link: '/causes-left' },
    { title: 'Causes Right', link: '/causes-right' },
    { title: 'Causes Single', link: '/causes-single' },
  ]

}
