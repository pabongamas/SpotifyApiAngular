import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-top-artists-user',
  templateUrl: './top-artists-user.component.html',
  styleUrls: ['./top-artists-user.component.scss']
})
export class TopArtistsUserComponent {
  @Input() topArtistsUser:{}={};
  @Input() topArtistsUserTotal:number=0;
}
