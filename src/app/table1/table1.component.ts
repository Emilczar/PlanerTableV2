import { Component, OnInit } from '@angular/core';
import { FileDbService } from '../service/file-db.service';
import { DndService } from '../service/dnd.service';

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.scss']
})
export class Table1Component implements OnInit {

  constructor(public dnd: DndService) {
   }

  ngOnInit() {
  }

}
