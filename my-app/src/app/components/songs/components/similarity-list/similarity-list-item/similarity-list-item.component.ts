import { Component, Input, OnInit } from '@angular/core';
import { SimilarSongModel } from '../../../models/similar-song.model';

@Component({
  selector: 'app-similarity-list-item',
  templateUrl: './similarity-list-item.component.html',
  styleUrls: ['./similarity-list-item.component.scss']
})
export class SimilarityListItemComponent implements OnInit {
  @Input() public song: SimilarSongModel;

  constructor() { }

  ngOnInit(): void {
  }

}
