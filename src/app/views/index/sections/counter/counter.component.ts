import { Component } from "@angular/core";
import { CounterDirective } from "../../../../directives/counter.directive";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-counter",
  imports: [CounterDirective, RouterLink],
  templateUrl: "./counter.component.html",
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {}
