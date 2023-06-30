import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  @Input() datacategories:any[]=[];
  @Input() totalElementsData:any;
  constructor() { }

  ngOnInit(): void {
  }
  @Output() eventEmitCategories: EventEmitter<any> = new EventEmitter();

  loadMoreCategories() {
    this.eventEmitCategories.emit();
  }

}
