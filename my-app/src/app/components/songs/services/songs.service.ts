import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  private searchQuery: string;
  private backEnd = environment.backEndLink;
  constructor(private http: HttpClient) { }

  public getSearchQuery(): string {
    return this.searchQuery;
  }

  public setSearchQuery(query: string): void {
    this.searchQuery = query;
  }

  public getSimilarSongs(words: string): Observable<object> {
    return this.http.get<object>(`${this.backEnd}/similarity/by_content?content=${words}`);
  }

  public getSongsByQuery(query: string): Observable<object> {
    return this.http.get<object>(`${this.backEnd}/song/search?query=${query}`);
  }
}
