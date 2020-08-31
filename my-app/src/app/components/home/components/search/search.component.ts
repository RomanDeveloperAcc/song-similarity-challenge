import { Component, OnInit } from '@angular/core';
import { SongsService } from '../../../songs/services/songs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchIcon = '/assets/img/homepage/search.png';
  public inputValue: string;

  constructor(private songsService: SongsService,
              private router: Router) { }

  ngOnInit(): void {
  }

  public search(): void {
    if (this.inputValue && this.inputValue.trim()) {
      this.songsService.setQuery(this.inputValue);
      this.router.navigate(['/songs'], { queryParams: { query: this.inputValue } });
    }
  }

}
