import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from '../../../services/search/search-service.service';
import { FormControl } from '@angular/forms';
import { debounceTime, of } from 'rxjs';
import { DataSourceAlbums } from './data-sourceAlbums';
import { itemsAlbum } from '../../models/itemsAlbum.model';
import { itemsArtists } from '../../models/itemsArtists.model';
import { switchMap } from 'rxjs';
import { DataSourceArtists } from './data-sourceArtists';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  dataSource = new DataSourceAlbums();
  dataSourceArtists=new DataSourceArtists();

  dataAlbums: itemsAlbum[] = [];
  dataArtists:itemsArtists[]=[];
  typeSearch: string[] = ['album', 'playlist', 'artist', 'track'];
  input = new FormControl('', { nonNullable: true });

  constructor(private searchServiceService: SearchServiceService,
    ) {
    }
  ngOnInit(): void {
    this.searchServiceService.dataAlbumsSearch$.subscribe((data) => {
      this.dataAlbums = data;
      this.dataSource.init(this.dataAlbums);
    });
    this.searchServiceService.dataArtistsSearch$.subscribe((data) => {
      this.dataArtists = data;
      this.dataSourceArtists.init(this.dataArtists);
    });
    
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
        this.dataArtists=data.artists.items;

        this.dataSource.init(this.dataAlbums);
        this.dataSourceArtists.init(this.dataArtists);
        this.searchServiceService.setDataAlbumsSearch(this.dataAlbums);
        this.searchServiceService.setDataArtistsSearch(this.dataArtists);
      }
    });
  }
}
