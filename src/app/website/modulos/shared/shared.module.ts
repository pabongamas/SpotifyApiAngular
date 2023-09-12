import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './components/albums/albums.component';
import { NewReleasesAlbumComponent } from './components/albums/new-releases-album/new-releases-album.component';
import { AlbumComponent } from './components/album/album.component';

@NgModule({
  declarations: [AlbumsComponent, NewReleasesAlbumComponent, AlbumComponent],
  imports: [CommonModule],
  exports: [AlbumsComponent, NewReleasesAlbumComponent,AlbumComponent],
})
export class SharedModule {}
