export interface SocialLink {
  icon: string;
  link: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  socialLinks: SocialLink[];
}
