import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsComponent } from './songs.component';
import { SongsListComponent } from './components/songs-list/songs-list.component';
import { SongsListItemComponent } from './components/songs-list/songs-list-item/songs-list-item.component';
import { SongsRoutingModule } from './songs-routing.module';

@NgModule({
  declarations: [
    SongsComponent,
    SongsListComponent,
    SongsListItemComponent
  ],
  imports: [
    CommonModule,
    SongsRoutingModule
  ],
  exports: [
    SongsComponent,
    SongsListComponent,
    SongsListItemComponent
  ]
})
export class SongsModule { }
