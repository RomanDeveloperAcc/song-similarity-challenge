import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-songs-list-item',
  templateUrl: './songs-list-item.component.html',
  styleUrls: ['./songs-list-item.component.scss']
})
export class SongsListItemComponent implements OnInit {
  @Input() public song: any;
  constructor() { }

  ngOnInit(): void {
  }

}
