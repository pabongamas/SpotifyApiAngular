import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';
import { itemsAlbum } from '../../models/itemsAlbum.model';

export class DataSourceAlbums extends DataSource<itemsAlbum> {
  data = new BehaviorSubject<itemsAlbum[]>([]);
  originalData: itemsAlbum[] = [];

  connect(): Observable<itemsAlbum[]> {
    return this.data;
  }
  init(itemsAlbum: itemsAlbum[]) {
    this.originalData = itemsAlbum;
    this.data.next(itemsAlbum);
  }
  getData() {
    const itemsAlbumValue = this.data.getValue();
    return itemsAlbumValue;
  }
  disconnect() {}
}
