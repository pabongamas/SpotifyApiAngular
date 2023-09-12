import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
// import { SearchModule } from '../../pages/search/search.module';
// import { SearchComponent } from '../../pages/search/search.component';
import { AlbumComponent } from './components/album/album.component';
import { AlbumsComponent } from './components/albums/albums.component';
// import { NewReleasesAlbumComponent } from '../../pages/new-releases-album/new-releases-album.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategorieComponent } from './components/categorie/categorie.component';

@NgModule({
  declarations: [
    // SearchComponent,
    AlbumComponent,
    AlbumsComponent,
    // NewReleasesAlbumComponent,
    CategoriesComponent,
    CategorieComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    // SearchModule,
    // MatIconModule,
    // FormsModule,
    // ReactiveFormsModule,
  ],
  exports: [
    // SearchComponent,
    AlbumsComponent,
    // NewReleasesAlbumComponent,
    CategoriesComponent,
    CategorieComponent,
  ],
})
export class SharedModule {}
