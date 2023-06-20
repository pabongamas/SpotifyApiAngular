import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { AuthSpotifyService } from '../../../services/auth-spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit {

  @Input() dataalbums: any;
  constructor(
    private AuthSpotifyService: AuthSpotifyService,
    private Router: Router
  ) {}
  ngOnInit(): void {
  }

  // newRealeseAlbum() {
  //   this.AuthSpotifyService.newRealese().subscribe((data) => {
  //     this.newRealeses = data.albums.items;
  //   });
  // }
}
