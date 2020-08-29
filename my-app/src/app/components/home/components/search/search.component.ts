import { Component, OnInit } from '@angular/core';
import { SongsService } from '../../../songs/services/songs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchIcon = '/assets/img/homepage/search.png';
  public inputValue: string;

  constructor(private songsService: SongsService) { }

  ngOnInit(): void {
  }

  public search(): void {
    this.songsService.getSongsByQuery(this.inputValue)
      .subscribe(data => console.log(data));
  }

}
