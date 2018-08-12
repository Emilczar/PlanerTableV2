import { Injectable } from '@angular/core';
import {
  HttpClient, HttpHeaders
} from '@angular/common/http';
import {
  Subject
} from 'rxjs/Subject';
import {
  Observable
} from 'rxjs/Observable';

@Injectable()
export class FileDbService {
  host = 'http://localhost:3000/version3';
   headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) {}

   getGuest() {
     return this.http.get(this.host);
   }



  postGuest(...arr) {
const obj = {
  guestList : arr[0],
  stol1_1 :  arr[1],
  stol1_2 :  arr[2],
  stol2_1 :  arr[3],
  stol2_2 :  arr[4],
  stol3_1 :  arr[5],
  stol3_2 :  arr[6]
};
    this.http.post(this.host, obj)
       .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('Error occured');
        }
      );
  }

}
