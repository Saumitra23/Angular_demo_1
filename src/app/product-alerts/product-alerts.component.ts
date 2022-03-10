import { Component, OnInit, Input } from '@angular/core';
import { product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  constructor() {}

  @Input() product!: product; //The @Input() decorator indicates that the property value passes in from the component's parent, ProductListComponent

  ngOnInit(): void {}
}