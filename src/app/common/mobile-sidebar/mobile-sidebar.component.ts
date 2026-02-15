import { CommonModule } from "@angular/common";
// import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { RouterLink } from "@angular/router";
import { MOBILE_MENU_ITEMS } from "../../data/mobile-menu";
import type { MobileMenuItem } from "../../models/mobile-menu-item.model";
@Component({
  selector: "app-mobile-sidebar",
  imports: [CommonModule, RouterLink],
  templateUrl: "./mobile-sidebar.component.html",
  styleUrls: ["./mobile-sidebar.component.scss"],
})
export class MobileSidebarComponent {
  @Input() isMenuOpen = false;
  @Output() closeMenuEvent = new EventEmitter<void>();
  menuItems: MobileMenuItem[] = [];

  // constructor(private http: HttpClient) {}

  ngOnInit() {
    // this.http.get<MenuItem[]>('assets/menu.json').subscribe(data => {
    this.menuItems = MOBILE_MENU_ITEMS;
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
