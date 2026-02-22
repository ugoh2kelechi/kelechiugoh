import { Component, Input, ViewEncapsulation } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { CommonModule } from "@angular/common";
import {
  BLOG_MENU_ITEMS,
  CAUSES_MENU_ITEMS,
  EVENT_MENU_ITEMS,
  HOME_MENU_ITEMS,
  PAGE_MENU_ITEMS,
} from "../../data/navbar-menus";
import type { HomeMenuItem, MenuItem } from "../../models/menu-item.model";

@Component({
  selector: "app-navbar",
  imports: [RouterLinkActive, CommonModule, RouterLink],
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent {
  @Input() logoImage: string = "";
  @Input() label: string = "";
  @Input() link: string = "#";
  @Input() btnClass: string = "";
  @Input() icon: string = "";
  @Input() btnParent: string = "";
  @Input() headerArea: string = "";
  @Input() headerElement: string = "";
  @Input() menuClass: string = "";
  @Input() container: boolean = false;
  @Input() buttonClass: string = "";

  homeMenuItems: HomeMenuItem[] = HOME_MENU_ITEMS;
  eventMenuItems: MenuItem[] = EVENT_MENU_ITEMS;
  blogMenuItems: MenuItem[] = BLOG_MENU_ITEMS;
  pageMenuItems: MenuItem[] = PAGE_MENU_ITEMS;
  causesPage: MenuItem[] = CAUSES_MENU_ITEMS;
}
