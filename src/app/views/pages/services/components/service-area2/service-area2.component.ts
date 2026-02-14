import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import { SERVICES_AREA_2 } from "../../../../../data/services-area2";
import type { ServiceItem } from "../../../../../models/service-item.model";

@Component({
  selector: "app-service-area2",
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: "./service-area2.component.html",
  styleUrls: ["./service-area2.component.scss"],
})
export class ServiceArea2Component {
  services: ServiceItem[] = SERVICES_AREA_2;
}
