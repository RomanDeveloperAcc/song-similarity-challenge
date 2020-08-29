import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  private backEnd = environment.backEndLink;
  constructor(private http: HttpClient) { }

  public getSimilarSongs(words: string): Observable<object> {
    const payload = {
      content: words
    };

    return this.http.post<object>(`${this.backEnd}/similarity/by_content`, payload);
  }

  public getSongsByQuery(query: string): Observable<object> {
    return this.http.get<object>(`${this.backEnd}/song/search?query=${query}`);
  }
}
