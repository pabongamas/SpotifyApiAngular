import { DataSource } from '@angular/cdk/collections';
import { playlistsObjetModel } from '../../models/playlistObject.model';
import { BehaviorSubject, Observable } from 'rxjs';

export class DataSourcePlaylistByUser extends DataSource<playlistsObjetModel> {
  data = new BehaviorSubject<playlistsObjetModel[]>([]);
  originalData: playlistsObjetModel[] = [];

  connect(): Observable<playlistsObjetModel[]> {
    return this.data;
  }
  init(playlistsByUser: playlistsObjetModel[]) {
    this.originalData = playlistsByUser;
    this.data.next(playlistsByUser);
  }
  getData() {
    const PlaylistByUserComponentData = this.data.getValue();
    return PlaylistByUserComponentData;
  }
  findPlaylists(query: string) {
    const newProducts = this.originalData.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
    this.data.next(newProducts);
  }

  disconnect() {}
}
