import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-selling-item',
  templateUrl: './top-selling-item.component.html',
  styleUrls: ['./top-selling-item.component.css']
})
export class TopSellingItemComponent implements OnInit {
  listCount = [1, 2, 3, 4];
  constructor() { }

  ngOnInit(): void {
  }

}
