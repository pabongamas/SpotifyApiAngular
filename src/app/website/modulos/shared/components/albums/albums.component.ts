import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { AuthSpotifyService } from '../../../../../services/auth-spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit {

  @Input() dataalbums:any[]=[];
  @Input() totalElementsData:any;
  @Input() viewDiscography:any=false;
  constructor(
    private AuthSpotifyService: AuthSpotifyService,
    private Router: Router
  ) {}
  ngOnInit(): void {
    console.log("llego");
  }

  @Output() eventEmitNewRealeses: EventEmitter<any> = new EventEmitter();

  loadMoreNewRealeses() {
    this.eventEmitNewRealeses.emit();
  }
}
