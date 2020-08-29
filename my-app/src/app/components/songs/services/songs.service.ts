import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  private searchQuery: string;
  private songId: number;
  private backEnd = environment.backEndLink;
  constructor(private http: HttpClient) { }

  public setQuery(query: string): void {
    this.searchQuery = query;
  }

  public setSongId(id: number): void {
    this.songId = id;
  }

  public getSimilarSongs(): Observable<object> {
    return this.http.get<object>(`${this.backEnd}/similarity/by_song?song_id=${this.songId}`);
  }

  public getSongsByQuery(): Observable<object> {
    return this.http.get<object>(`${this.backEnd}/song/search?query=${this.searchQuery}`);
  }
}
