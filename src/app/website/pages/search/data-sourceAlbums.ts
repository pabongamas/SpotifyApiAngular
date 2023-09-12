import { DataSource } from '@angular/cdk/collections';
import { playlistsObjetModel } from '../../models/playlistObject.model';
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
    const PlaylistByUserComponentData = this.data.getValue();
    return PlaylistByUserComponentData;
  }
  // findPlaylists(query: string) {
  //   const newProducts = this.originalData.filter(
  //     (item) =>
  //       item.name.toLowerCase().includes(query.toLowerCase()) ||
  //       item.description.toLowerCase().includes(query.toLowerCase())
  //   );
  //   this.data.next(newProducts);
  // }

  disconnect() {}
}
