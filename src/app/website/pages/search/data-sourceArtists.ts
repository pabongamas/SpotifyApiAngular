import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';
import { itemsArtists } from '../../models/itemsArtists.model';

export class DataSourceArtists extends DataSource<itemsArtists> {
  data = new BehaviorSubject<itemsArtists[]>([]);
  originalData: itemsArtists[] = [];

  connect(): Observable<itemsArtists[]> {
    return this.data;
  }
  init(itemsArtistsModel: itemsArtists[]) {
    this.originalData = itemsArtistsModel;
    this.data.next(itemsArtistsModel);
  }
  getData() {
    const itemsArtistsModelValue = this.data.getValue();
    return itemsArtistsModelValue;
  }


  disconnect() {}
}
