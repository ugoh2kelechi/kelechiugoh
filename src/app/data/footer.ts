import type {
  FooterContactInfo,
  FooterLink,
  FooterSocialLink,
} from "../models/footer.model";

export const FOOTER_BRAND_LOGOS: string[] = [
  "assets/img/brand/brand-logo-4.1.png",
  "assets/img/brand/brand-logo-4.2.png",
  "assets/img/brand/brand-logo-4.3.png",
  "assets/img/brand/brand-logo-4.4.png",
  "assets/img/brand/brand-logo-4.5.png",
];

export const FOOTER_SOCIAL_LINKS: FooterSocialLink[] = [
  {
    icon: "fa-brands fa-facebook-f",
    link: "https://www.facebook.com/profile.php?id=61576566101984",
  },
  {
    icon: "fa-brands fa-instagram",
    link: "https://www.instagram.com/officialkku/",
  },
  { icon: "fa-brands fa-twitter", link: "https://x.com/officialkku" },
  {
    icon: "fa-brands fa-youtube",
    link: "https://www.youtube.com/@OfficialKelechiUgoh",
  },
  {
    icon: "fa-brands fa-tiktok",
    link: "https://www.tiktok.com/@officialkku",
  },
];

export const FOOTER_QUICK_LINKS: FooterLink[] = [
  { label: "Home Page", url: "/" },
  { label: "About Us", url: "/about" },
  { label: "Appointment", url: "#" },
  { label: "News & Blog", url: "/blog" },
  { label: "Testimonials", url: "#" },
];

export const FOOTER_SERVICES: FooterLink[] = [
  { label: "Donation Online", url: "#" },
  { label: "Donor Centres", url: "#" },
  { label: "Volunteering", url: "/volunteers" },
  { label: "Your Philanthropy", url: "#" },
  { label: "Senior Care", url: "#" },
];

export const FOOTER_CONTACT_INFO: FooterContactInfo[] = [
  {
    icon: "assets/img/icons/vl-footer-ic-1.1.svg",
    text: "office@kelechiugoh.com",
    link: "mailto:office@kelechiugoh.com",
  },
  {
    icon: "assets/img/icons/vl-footer-ic-1.2.svg",
    text: "WORLD WIDE",
    link: "#",
  },
  {
    icon: "assets/img/icons/vl-footer-2.1.svg",
    text: "+1 (267) 367-7154",
    link: "tel:+1(267)3677154",
  },
];
