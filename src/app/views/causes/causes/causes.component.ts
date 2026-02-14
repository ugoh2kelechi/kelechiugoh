import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { BreadcrumbComponent } from "../../../common/breadcrumb/breadcrumb.component";
import { CAUSES } from "../../../data/causes";
import type { CauseItem } from "../../../models/cause.model";

@Component({
  selector: "app-causes",
  imports: [BreadcrumbComponent, CommonModule, NgOptimizedImage, RouterLink],
  templateUrl: "./causes.component.html",
  styleUrls: ["./causes.component.scss"],
})
export class CausesComponent {
  causes: CauseItem[] = CAUSES;
  currentPage = 1;
  pageSize = 6;

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.causes.length / this.pageSize));
  }

  get pagedCauses(): CauseItem[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.causes.slice(start, start + this.pageSize);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    this.currentPage = page;
  }
}
