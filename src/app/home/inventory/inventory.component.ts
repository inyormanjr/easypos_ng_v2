import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  listCount = [1, 2, 3, 4, 5, 6, 7];
  constructor() { }

  ngOnInit(): void {
  }

}
