import { itemsArtists } from "./itemsArtists.model"
export interface artistsModel{
  href:string,
  items:itemsArtists[],
  limit:number,
  next:string,
  offset:number,
  previous:null|number,
  total:number
}
