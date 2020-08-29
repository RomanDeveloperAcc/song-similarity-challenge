import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { HomepageComponent } from "./components/homepage/homepage.component";



@NgModule({
  declarations: [
    SearchComponent,
    HomepageComponent
  ],
  exports: [
    HomepageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
