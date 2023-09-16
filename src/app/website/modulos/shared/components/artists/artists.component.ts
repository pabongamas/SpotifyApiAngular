import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent {
  @Input() dataArtist:any;
  @Input() isSearch:boolean|null=false;
}
