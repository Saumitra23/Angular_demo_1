import { Component, Input, Output, EventEmitter } from '@angular/core';
import { product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent {
  constructor() {}

  @Input() product!: product; //The @Input() decorator indicates that the property value passes in from the component's parent, ProductListComponent
  @Output() notify = new EventEmitter();

}
