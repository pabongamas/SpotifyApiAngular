import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {
  @Input() track:any;
  @Input() esPlaylist:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
