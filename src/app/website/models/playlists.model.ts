import { itemsPlaylists } from "./itemsPlaylists.model"
export interface playlistsModel{
  href:string,
  items:itemsPlaylists[],
  limit:number,
  next:string,
  offset:number,
  previous:null|number,
  total:number
}
