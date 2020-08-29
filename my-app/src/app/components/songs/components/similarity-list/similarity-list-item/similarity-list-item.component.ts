import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-similarity-list-item',
  templateUrl: './similarity-list-item.component.html',
  styleUrls: ['./similarity-list-item.component.scss']
})
export class SimilarityListItemComponent implements OnInit {
  @Input() public song: any;

  constructor() { }

  ngOnInit(): void {
  }

}
