import { Component } from "@angular/core";
import { CounterDirective } from "../../../../directives/counter.directive";

@Component({
  selector: "app-testi-area",
  imports: [CounterDirective],
  templateUrl: "./testi-area.component.html",
  styleUrl: "./testi-area.component.scss",
})
export class TestiAreaComponent {}
