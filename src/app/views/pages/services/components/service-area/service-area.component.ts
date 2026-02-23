<<<<<<< HEAD
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import { SERVICES_AREA } from "../../../../../data/services-area";
import type { ServiceItem } from "../../../../../models/service-item.model";

@Component({
  selector: "app-service-area",
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: "./service-area.component.html",
  styleUrls: ["./service-area.component.scss"],
})
export class ServiceAreaComponent {
  services: ServiceItem[] = SERVICES_AREA;
}
=======
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import { SERVICES_AREA } from "../../../../../data/services-area";
import type { ServiceItem } from "../../../../../models/service-item.model";

@Component({
  selector: "app-service-area",
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: "./service-area.component.html",
  styleUrls: ["./service-area.component.scss"],
})
export class ServiceAreaComponent {
  services: ServiceItem[] = SERVICES_AREA;
}
>>>>>>> 3460d3272a206d44f28fcf2012211c5cd6093c76
