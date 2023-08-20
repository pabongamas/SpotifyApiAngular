import {playlistsObjetModel} from './../models/playlistObject.model';
export interface playlistsByUserModel{
    href:string,
    items:any[],
    limit:number,
    next:number|null,
    offset:number|null,
    previous:number|null,
    total:number|null
}