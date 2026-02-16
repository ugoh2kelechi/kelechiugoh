import type { HomeMenuItem, MenuItem } from "../models/menu-item.model";

export const HOME_MENU_ITEMS: HomeMenuItem[] = [
  {
    title: "Disaster Relief",
    image: "assets/img/demo/vl-demo1.1.png",
    multiPageLink: "/index",
    onePageLink: "/index-single",
  },
  {
    title: "Animal Rescue and Welfare",
    image: "assets/img/demo/vl-demo-1.2.png",
    multiPageLink: "/index-2",
    onePageLink: "/index-single-2",
  },
  {
    title: "Water Aid",
    image: "assets/img/demo/vl-demo-1.3.png",
    multiPageLink: "/index-3",
    onePageLink: "/index-single-3",
  },
  {
    title: "Senior Citizen",
    image: "assets/img/demo/vl-demo-1.4.png",
    multiPageLink: "/index-4",
    onePageLink: "/index-single-4",
  },
  {
    title: "Human Rights Advocacy",
    image: "assets/img/demo/vl-demo-1.5.png",
    multiPageLink: "/index-5",
    onePageLink: "/index-single-5",
  },
];

export const EVENT_MENU_ITEMS: MenuItem[] = [
  { title: "Events", link: "/event" },
  { title: "Events Left", link: "/event-left" },
  { title: "Events Right", link: "/event-right" },
  { title: "Event Details", link: "/event" },
];

export const BLOG_MENU_ITEMS: MenuItem[] = [
  { title: "Blog", link: "/blog" },
  { title: "Blog Left", link: "/blog-left" },
  { title: "Blog Right", link: "/blog-right" },
  { title: "Blog Details", link: "/blog" },
];

export const PAGE_MENU_ITEMS: MenuItem[] = [
  { title: "Our Services", link: "/services" },
  { title: "Our Volunteers", link: "/volunteers" },
  { title: "FAQ", link: "/faq" },
  { title: "Contact", link: "/contact" },
  { title: "404", link: "/404" },
];

export const CAUSES_MENU_ITEMS: MenuItem[] = [
  { title: "Causes", link: "/causes" },
  { title: "Causes Left", link: "/causes-left" },
  { title: "Causes Right", link: "/causes-right" },
  { title: "Cause Details", link: "/causes" },
];
