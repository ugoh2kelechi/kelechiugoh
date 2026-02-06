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
    { icon: 'fa-brands fa-facebook-f', link: 'https://www.facebook.com/profile.php?id=61576566101984' },
    { icon: 'fa-brands fa-instagram', link: 'https://www.instagram.com/officialkku/' },
    { icon: 'fa-brands fa-twitter', link: 'https://x.com/officialkku' },
    { icon: 'fa-brands fa-youtube', link: 'https://www.youtube.com/@OfficialKelechiUgoh' },
    { icon: 'fa-brands fa-tiktok', link: 'https://www.tiktok.com/@officialkku' }
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
    { icon: 'assets/img/icons/vl-footer-ic-1.1.svg', text: 'office@kelechiugoh.com', link: 'mailto:office@kelechiugoh.com' },
    { icon: 'assets/img/icons/vl-footer-ic-1.2.svg', text: 'WORLD WIDE', link: '#' },
    { icon: 'assets/img/icons/vl-footer-2.1.svg', text: '+1 (267) 367-7154', link: 'tel:+1(267)3677154' }
  ];
}
