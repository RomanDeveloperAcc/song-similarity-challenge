import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SongsComponent } from './songs.component';
import { SongsListComponent } from './components/songs-list/songs-list.component';
import { SongsListItemComponent } from './components/songs-list/songs-list-item/songs-list-item.component';
import { SongsRoutingModule } from './songs-routing.module';
import { SimilarityListComponent } from './components/similarity-list/similarity-list.component';
import { SimilarityListItemComponent } from './components/similarity-list/similarity-list-item/similarity-list-item.component';
import { SongInfoComponent } from './components/song-info/song-info.component';
import { ModifyTextPipe } from './pipes/modify-text.pipe';

@NgModule({
  declarations: [
    SongsComponent,
    SongsListComponent,
    SongsListItemComponent,
    SimilarityListComponent,
    SimilarityListItemComponent,
    SongInfoComponent,
    ModifyTextPipe
  ],
  imports: [
    CommonModule,
    SongsRoutingModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  exports: [
    SongsComponent,
    SongsListComponent,
    SongsListItemComponent,
    SimilarityListComponent,
    SimilarityListItemComponent,
    SongInfoComponent
  ]
})
export class SongsModule { }
