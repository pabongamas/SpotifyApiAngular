import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from '../../../services/search/search-service.service';
import { FormControl } from '@angular/forms';
import { debounceTime, of } from 'rxjs';
import { DataSourceAlbums } from './data-sourceAlbums';
import { albumsModel } from '../../models/albums.model';
import { itemsAlbum } from '../../models/itemsAlbum.model';
import { switchMap } from 'rxjs';

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
    this.input.valueChanges.pipe(
      debounceTime(300),
      switchMap((value) => {
        if (value) {
          return this.searchServiceService.searchItems(value, this.typeSearch);
        } else {
          // Si el valor está vacío, retornar un observable vacío
          return of(null);
        }
      })
    ).subscribe((data) => {
      if(data){
        this.dataAlbums = data.albums.items;
        this.dataSource.init(this.dataAlbums);
      }
    });
  }
}
