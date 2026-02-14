import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { CounterDirective } from "../../../../directives/counter.directive";

@Component({
  selector: "app-counter-area",
  imports: [CounterDirective, RouterLink],
  templateUrl: "./counter-area.component.html",
  styleUrl: "./counter-area.component.scss",
})
export class CounterAreaComponent {}
