import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  year = new Date().getFullYear();


  brandLogos: string[] = [
    'assets/img/brand/brand-logo-4.1.png',
    'assets/img/brand/brand-logo-4.2.png',
    'assets/img/brand/brand-logo-4.3.png',
    'assets/img/brand/brand-logo-4.4.png',
    'assets/img/brand/brand-logo-4.5.png'
  ];

  socialLinks = [
    { icon: 'fa-brands fa-facebook-f', link: '#' },
    { icon: 'fa-brands fa-instagram', link: '#' },
    { icon: 'fa-brands fa-twitter', link: '#' },
    { icon: 'fa-brands fa-github', link: '#' }
  ];

  quickLinks = [
    { label: 'Home Page', url: '/' },
    { label: 'About Us', url: '/about' },
    { label: 'Appointment', url: '#' },
    { label: 'News & Blog', url: '/blog' },
    { label: 'Testimonials', url: '#' }
  ];

  services = [
    { label: 'Donation Online', url: '#' },
    { label: 'Donor Centres', url: '#' },
    { label: 'Volunteering', url: '/team' },
    { label: 'Your Philanthropy', url: '#' },
    { label: 'Senior Care', url: '#' }
  ];

  contactInfo = [
    { icon: 'assets/img/icons/vl-footer-ic-1.1.svg', text: 'support@charity.com', link: 'mailto:support@charity.com' },
    { icon: 'assets/img/icons/vl-footer-ic-1.2.svg', text: '8708 Technology Forest Pl Suite 125 -G, The Woodlands, TX 773', link: '#' },
    { icon: 'assets/img/icons/vl-footer-2.1.svg', text: '123-456-7890', link: 'tel:1234567890' }
  ];
}
