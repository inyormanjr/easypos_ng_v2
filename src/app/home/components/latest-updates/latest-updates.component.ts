import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-updates',
  templateUrl: './latest-updates.component.html',
  styleUrls: ['./latest-updates.component.css']
})
export class LatestUpdatesComponent implements OnInit {
  listCount = [1, 2, 3];
  constructor() { }

  ngOnInit(): void {
  }

}
