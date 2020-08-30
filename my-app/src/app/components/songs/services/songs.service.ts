import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SongResponseModel } from '../../../models/song-response.model';
import { QueryResponseModel } from '../../../models/query-response.model';
import { SimilarSongModel } from '../models/similar-song.model';

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  private searchQuery: string;
  private songId: number;
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

  public setSongId(id: number): void {
    this.songId = id;
  }

  public getSimilarSongs(): Observable<SongResponseModel> {
    return this.http.get<SongResponseModel>(`${this.backEnd}/similarity/by_song?song_id=${this.songId}`);
  }

  public getSongsByQuery(): Observable<QueryResponseModel> {
    return this.http.get<QueryResponseModel>(`${this.backEnd}/song/search?query=${this.searchQuery}`);
  }
}
