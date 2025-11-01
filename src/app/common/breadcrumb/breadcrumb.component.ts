import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  imports: [CommonModule],
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
  @Input() backgroundImage: string = '';
  @Input() shape1: string = '';
  @Input() shape2: string = '';
  @Input() shape3: string = '';
  @Input() pageTitle: string = '';
}
