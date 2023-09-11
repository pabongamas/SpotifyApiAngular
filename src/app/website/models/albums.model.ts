import {itemsAlbum} from './itemsAlbum.model'
export interface albumsModel{
  href:string,
  items:itemsAlbum[],
  limit:number,
  next:string,
  offset:number,
  previous:null|number,
  total:number
}
