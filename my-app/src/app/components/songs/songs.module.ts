import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsComponent } from './songs.component';
import { SongsListComponent } from './components/songs-list/songs-list.component';
import { SongsListItemComponent } from './components/songs-list/songs-list-item/songs-list-item.component';
import { SongsRoutingModule } from './songs-routing.module';
import { SimilarityListComponent } from './components/similarity-list/similarity-list.component';
import { SimilarityListItemComponent } from './components/similarity-list/similarity-list-item/similarity-list-item.component';

@NgModule({
  declarations: [
    SongsComponent,
    SongsListComponent,
    SongsListItemComponent,
    SimilarityListComponent,
    SimilarityListItemComponent
  ],
  imports: [
    CommonModule,
    SongsRoutingModule
  ],
  exports: [
    SongsComponent,
    SongsListComponent,
    SongsListItemComponent,
    SimilarityListComponent,
    SimilarityListItemComponent
  ]
})
export class SongsModule { }
