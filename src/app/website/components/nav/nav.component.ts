import { Component, OnInit } from '@angular/core';
import{AuthSpotifyService} from '../../../services/auth-spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(
    private AuthSpotifyService:AuthSpotifyService,
    private Router:Router,
  ) { }

  ngOnInit(): void {
  }
  login(){
    console.log("aca entra" );
    this.AuthSpotifyService.Authorization()
    // .subscribe(()=>{
    //   this.Router.navigate(['/profile']);
    // });
  }
}
