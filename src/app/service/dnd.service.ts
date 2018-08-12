import { Injectable } from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  Subject
} from 'rxjs/Subject';
import {
  Observable
} from 'rxjs/Observable';
import { FileDbService } from './file-db.service';

@Injectable()
export class DndService {
  public guestList: string[] = new Array();
  public stol1_1: string[] = new Array(16).fill(null);
  public stol1_2: string[] = new Array(16).fill(null);

  public stol2_1: string[] = new Array(20).fill(null);
  public stol2_2: string[] = new Array(20).fill(null);

  public stol3_1: string[] =  new Array(26).fill(null);
  public stol3_2: string[] =  new Array(26).fill(null);

  constructor(private fileGuest: FileDbService) {

    this.fileGuest.getGuest().subscribe((data) => {
      this.guestList = data['guestList'];
      this.stol1_1 = data['stol1_1'];
      this.stol1_2 = data['stol1_2'];
      this.stol2_1 = data['stol2_1'];
      this.stol2_2 = data['stol2_2'];
      this.stol3_1 = data['stol3_1'];
      this.stol3_2 = data['stol3_2'];
    });


  }


  lockDrop(index: number, tab: Array < string > ) {
    if (tab[index] === null) {
      return true;
    } else {
      return false;
    }
  }

  lockDrag(index: number, tab: Array < string > ) {
    if (tab[index] === null) {
      return false;
    } else {
      return true;
    }
  }
  onItemDrop(e: any, index: number, db: Array < string > ) {
    db[index] = e.dragData.name;
    const value: string = e.dragData.db;
    switch (value) {
      case 'guestList':
        {
          this.guestList[e.dragData.index] = null;
          console.log('guestList');
          break;
        }
      case 'stol3_1':
        {
          this.stol3_1[e.dragData.index] = null;
          console.log('stol3_1');
          break;
        }
      case 'stol3_2':
        {
          this.stol3_2[e.dragData.index] = null;
          console.log('stol3_2');
          break;
        }
      case 'stol2_1':
        {
          this.stol2_1[e.dragData.index] = null;
          console.log('stol2_1');
          break;
        }
      case 'stol2_2':
        {
          this.stol2_2[e.dragData.index] = null;
          console.log('stol2_2');
          break;
        }
      case 'stol1_1':
        {
          this.stol1_1[e.dragData.index] = null;
          console.log('stol0_1');
          break;
        }
      case 'stol1_2':
        {
          this.stol1_2[e.dragData.index] = null;
          console.log('stol0_2');
          break;
        }
      default:
        {
          console.log('bład z tabelami');
          break;
        }
    }
  }

}
