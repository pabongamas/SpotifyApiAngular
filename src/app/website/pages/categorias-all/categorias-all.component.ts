import { Component, OnInit } from '@angular/core';
import { AuthSpotifyService } from '../../../services/auth-spotify.service';

@Component({
  selector: 'app-categorias-all',
  templateUrl: './categorias-all.component.html',
  styleUrls: ['./categorias-all.component.scss']
})
export class CategoriasAllComponent implements OnInit {

  constructor(
    private AuthSpotifyService:AuthSpotifyService,
  ) { }
  categories:any[]=[];
  offset=0;
  limit=21;
  totalElements:number=0;
  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(){
    this.AuthSpotifyService.getCategories(this.offset,this.limit).subscribe((data) => {
      this.categories = this.categories.concat(data.categories.items);
      this.offset += this.limit;
      this.totalElements=data.categories.total;
    }
    )

  }
  loadMoreCategories(){
    this.loadCategories();
   }

}
