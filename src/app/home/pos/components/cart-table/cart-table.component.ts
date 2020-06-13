import { Component, OnInit } from '@angular/core';
import { SaleTransaction } from 'src/app/home/models/sales.transaction';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.css'],
})
export class CartTableComponent implements OnInit {
  mockData: SaleTransaction[] = [
    { uid: '1', itemName: 'GPBL-IphoneX', qnty: 3, uPrice: 15, totalPrice: 45 },
    { uid: '1', itemName: 'GPBL-IphoneX', qnty: 3, uPrice: 15, totalPrice: 45 },
    { uid: '1', itemName: 'GPBL-IphoneX', qnty: 3, uPrice: 15, totalPrice: 45 },
    { uid: '1', itemName: 'GPBL-IphoneX', qnty: 3, uPrice: 15, totalPrice: 45 },
    { uid: '1', itemName: 'GPBL-IphoneX', qnty: 3, uPrice: 15, totalPrice: 45 },
    { uid: '1', itemName: 'GPBL-IphoneX', qnty: 3, uPrice: 15, totalPrice: 45 },
    { uid: '1', itemName: 'GPBL-IphoneX', qnty: 3, uPrice: 15, totalPrice: 45 },
    { uid: '1', itemName: 'GPBL-IphoneX', qnty: 3, uPrice: 15, totalPrice: 45 },
    { uid: '1', itemName: 'GPBL-IphoneX', qnty: 3, uPrice: 15, totalPrice: 45 },
    { uid: '1', itemName: 'GPBL-IphoneX', qnty: 3, uPrice: 15, totalPrice: 45 },
  ];
  constructor() {}

  ngOnInit(): void {}
}
