import {
  DndService
} from './../service/dnd.service';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  FileDbService
} from '../service/file-db.service';
import {
  Observable
} from 'rxjs/Observable';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss']
})
export class GuestComponent implements OnInit {
  // public guestList$: Observable < any[] > ;
  constructor(public fileDB: FileDbService, public dnd: DndService) {}

  ngOnInit() {}

  getPost() {
    this.fileDB.postGuest();
  }
}
