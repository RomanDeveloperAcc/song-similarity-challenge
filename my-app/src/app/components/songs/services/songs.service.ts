import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { SongResponseModel } from '../../../models/song-response.model';
import { QueryResponseModel } from '../../../models/query-response.model';
import { SimilarSongModel } from '../models/similar-song.model';

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  private searchQuery = '';
  private backEnd = environment.backEndLink;
  private songInfo: SimilarSongModel;

  constructor(private http: HttpClient) { }

  public getSongInfo(): SimilarSongModel {
    return this.songInfo;
  }

  public setSongInfo(song: SimilarSongModel): void {
    this.songInfo = song;
  }

  public setQuery(query: string): void {
    this.searchQuery = query;
  }

  public getSimilarSongs(id: number): Observable<SongResponseModel> {
    return this.http.get<SongResponseModel>(`${this.backEnd}/similarity/by_song?song_id=${id}`);
  }

  public getSongsByQuery(): Observable<QueryResponseModel> {
    return this.http.get<QueryResponseModel>(`${this.backEnd}/song/search?query=${this.searchQuery}`);
  }
}
