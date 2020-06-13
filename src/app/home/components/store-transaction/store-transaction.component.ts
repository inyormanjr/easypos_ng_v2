import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-transaction',
  templateUrl: './store-transaction.component.html',
  styleUrls: ['./store-transaction.component.css'],
})
export class StoreTransactionComponent implements OnInit {
  storeList = [
    { storeName: 'Store One', storeId: 1 },
    { storeName: 'Store Two', storeId: 2 },
  ];
  constructor() {}

  ngOnInit(): void {}
}
