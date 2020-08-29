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

  public setQuery(query: string): void {
    this.searchQuery = query;
  }

  public getSimilarSongs(): Observable<object> {
    const payload = {
      content: this.searchQuery
    };

    return this.http.post<object>(`${this.backEnd}/similarity/by_content`, payload);
  }

  public getSongsByQuery(): Observable<object> {
    return this.http.get<object>(`${this.backEnd}/song/search?query=${this.searchQuery}`);
  }
}
