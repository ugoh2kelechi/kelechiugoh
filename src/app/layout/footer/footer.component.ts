import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import {
  FOOTER_BRAND_LOGOS,
  FOOTER_CONTACT_INFO,
  FOOTER_QUICK_LINKS,
  FOOTER_SERVICES,
  FOOTER_SOCIAL_LINKS,
} from "../../data/footer";
import type {
  FooterContactInfo,
  FooterLink,
  FooterSocialLink,
} from "../../models/footer.model";

@Component({
  selector: "app-footer",
  imports: [RouterLink],
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent {
  year = new Date().getFullYear();
  brandLogos: string[] = FOOTER_BRAND_LOGOS;
  socialLinks: FooterSocialLink[] = FOOTER_SOCIAL_LINKS;
  quickLinks: FooterLink[] = FOOTER_QUICK_LINKS;
  services: FooterLink[] = FOOTER_SERVICES;
  contactInfo: FooterContactInfo[] = FOOTER_CONTACT_INFO;
}
