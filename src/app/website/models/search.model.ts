import {albumsModel} from './albums.model';
import { artistsModel } from './artists.model';
import { playlistsModel } from './playlists.model';
export interface searchModel{
  albums:albumsModel,
  artists:artistsModel,
  playlists:playlistsModel,
  tracks:{}
}
