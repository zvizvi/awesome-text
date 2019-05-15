import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [LibraryService]
})
export class HomeComponent implements OnInit {
  list: object;
  selected: object;

  constructor(private libraryService: LibraryService) {
    this.list = libraryService.list
    this.selected = this.list[0]
  }

  ngOnInit() {

  }

}
