import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-top-tracks-user',
  templateUrl: './top-tracks-user.component.html',
  styleUrls: ['./top-tracks-user.component.scss']
})
export class TopTracksUserComponent {
  @Input() topTracksUser:{}={};
  @Input() totalTopTracksUser:number=0;
}
