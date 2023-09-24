import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';
import { itemsPlaylists } from '../../models/itemsPlaylists.model';

export class DataSourcePlaylists extends DataSource<itemsPlaylists> {
  data = new BehaviorSubject<itemsPlaylists[]>([]);
  originalData: itemsPlaylists[] = [];

  connect(): Observable<itemsPlaylists[]> {
    return this.data;
  }
  init(itemsPlaylistModel: itemsPlaylists[]) {
    this.originalData = itemsPlaylistModel;
    this.data.next(itemsPlaylistModel);
  }
  getData() {
    const itemsPlaylistModelValue = this.data.getValue();
    return itemsPlaylistModelValue;
  }


  disconnect() {}
}
