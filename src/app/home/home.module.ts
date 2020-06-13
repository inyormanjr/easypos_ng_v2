
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing/home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryComponent } from './inventory/inventory.component';
import { PosComponent } from './pos/pos.component';
import { UsersComponent } from './users/users.component';
import { SettingsComponent } from './settings/settings.component';
import { RouterModule } from '@angular/router';

import { Angular2UsefulSwiperModule } from 'angular2-useful-swiper';
import { LatestUpdatesComponent } from './components/latest-updates/latest-updates.component';
import { StoreTransactionComponent } from './components/store-transaction/store-transaction.component';
import { TopSellingItemComponent } from './components/top-selling-item/top-selling-item.component';
import { ItemSectionComponent } from './pos/item-section/item-section.component';
import { ItemCartSectionComponent } from './pos/item-cart-section/item-cart-section.component';
import { UserInfoSectionComponent } from './pos/user-info-section/user-info-section.component';
import { BrowserModule } from '@angular/platform-browser';
import { CartTableComponent } from './pos/components/cart-table/cart-table.component';
import { CartSummaryComponent } from './pos/components/cart-summary/cart-summary.component';
import { CartButtonsComponent } from './pos/components/cart-buttons/cart-buttons.component';



@NgModule({
  declarations: [HomeComponent,
    DashboardComponent,
    InventoryComponent,
    PosComponent,
    UsersComponent,
    SettingsComponent,
    LatestUpdatesComponent,
    StoreTransactionComponent,
    TopSellingItemComponent,
    ItemSectionComponent,
    ItemCartSectionComponent,
    UserInfoSectionComponent,
    CartTableComponent,
    CartSummaryComponent,
    CartButtonsComponent],
  imports: [
    RouterModule,
    CommonModule,
    Angular2UsefulSwiperModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
