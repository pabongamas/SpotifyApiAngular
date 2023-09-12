import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-album-page',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  @Input() viewDiscography:any=false;
  // @Input() product:Product={
  //   id:'',
  //   price:0,
  //   images:[],
  //   title:'',
  //   category:{
  //     id:'',
  //     name:'',
  //   },
  //   description:''
  // };
  @Input() album:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
