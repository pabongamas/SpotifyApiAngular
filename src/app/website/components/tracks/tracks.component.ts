import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit {
  @Input() dataTracks:any;
  @Input() esPlaylist:boolean=false;
  @Input() isTrackByUser:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
