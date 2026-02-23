<<<<<<< HEAD
import { CommonModule } from "@angular/common";
// import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { MOBILE_MENU_ITEMS } from "../../data/mobile-menu";
import type { MobileMenuItem } from "../../models/mobile-menu-item.model";
import { LatestCauseLinkService } from "../../service/latest-cause-link.service";
@Component({
  selector: "app-mobile-sidebar",
  imports: [CommonModule, RouterLink],
  templateUrl: "./mobile-sidebar.component.html",
  styleUrls: ["./mobile-sidebar.component.scss"],
})
export class MobileSidebarComponent implements OnInit {
  @Input() isMenuOpen = false;
  @Output() closeMenuEvent = new EventEmitter<void>();
  menuItems: MobileMenuItem[] = [];
  donateLink = "/cause-details";

  constructor(private latestCauseLink: LatestCauseLinkService) {}

  async ngOnInit() {
    // this.http.get<MenuItem[]>('assets/menu.json').subscribe(data => {
    this.menuItems = MOBILE_MENU_ITEMS;
    this.donateLink = await this.latestCauseLink.getLatestCauseLink();
    // });
  }

  closeSidebar() {
    this.closeMenuEvent.emit();
  }
  toggleSubMenu(item: MobileMenuItem, event?: Event): void {
    if (event) {
      event.stopPropagation(); // Prevents click from propagating to the parent <a>
    }

    if (item.subMenu) {
      item.isOpen = !item.isOpen;
    }
  }
}
=======
import { CommonModule } from "@angular/common";
// import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { MOBILE_MENU_ITEMS } from "../../data/mobile-menu";
import type { MobileMenuItem } from "../../models/mobile-menu-item.model";
import { LatestCauseLinkService } from "../../service/latest-cause-link.service";
@Component({
  selector: "app-mobile-sidebar",
  imports: [CommonModule, RouterLink],
  templateUrl: "./mobile-sidebar.component.html",
  styleUrls: ["./mobile-sidebar.component.scss"],
})
export class MobileSidebarComponent implements OnInit {
  @Input() isMenuOpen = false;
  @Output() closeMenuEvent = new EventEmitter<void>();
  menuItems: MobileMenuItem[] = [];
  donateLink = "/cause-details";

  constructor(private latestCauseLink: LatestCauseLinkService) {}

  async ngOnInit() {
    // this.http.get<MenuItem[]>('assets/menu.json').subscribe(data => {
    this.menuItems = MOBILE_MENU_ITEMS;
    this.donateLink = await this.latestCauseLink.getLatestCauseLink();
    // });
  }

  closeSidebar() {
    this.closeMenuEvent.emit();
  }
  toggleSubMenu(item: MobileMenuItem, event?: Event): void {
    if (event) {
      event.stopPropagation(); // Prevents click from propagating to the parent <a>
    }

    if (item.subMenu) {
      item.isOpen = !item.isOpen;
    }
  }
}
>>>>>>> 3460d3272a206d44f28fcf2012211c5cd6093c76
