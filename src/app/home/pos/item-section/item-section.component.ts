import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { Item } from '../../models/item';
import { MockData } from '../../services/mockData';
@Component({
  selector: 'app-item-section',
  templateUrl: './item-section.component.html',
  styleUrls: ['./item-section.component.css'],
})
export class ItemSectionComponent implements OnInit {
  mockItems: Item[] = new MockData().Items();
  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    spaceBetween: 30,
  };
  constructor() {}

  ngOnInit(): void {}
}
