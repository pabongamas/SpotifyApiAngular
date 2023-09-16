import {albumsModel} from './albums.model';
import { artistsModel } from './artists.model';
export interface searchModel{
  albums:albumsModel,
  artists:artistsModel,
  playlist:{},
  tracks:{}
}
