import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from './../../../services/search/search-service.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { DataSourceAlbums } from './data-sourceAlbums';
import { albumsModel } from '../../models/albums.model';
import { itemsAlbum } from '../../models/itemsAlbum.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  dataSource = new DataSourceAlbums();
  dataAlbums: itemsAlbum[] = [];

  typeSearch: string[] = ['album', 'playlist', 'artist', 'track'];
  input = new FormControl('', { nonNullable: true });
  constructor(private searchServiceService: SearchServiceService) {}
  ngOnInit(): void {
    this.input.valueChanges.pipe(debounceTime(300)).subscribe((value) => {
      this.dataAlbums=[];
      this.dataSource.init(this.dataAlbums);
      if(value){
        this.searchServiceService
        .searchItems(value, this.typeSearch)
        .subscribe((data) => {
          this.dataAlbums = data.albums.items;
          this.dataSource.init(this.dataAlbums);
        });
      }
    });
  }
}
