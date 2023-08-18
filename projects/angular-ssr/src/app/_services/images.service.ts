import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, BehaviorSubject } from  'rxjs';
import { Image } from '../_models/Image';
@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  imagesSubject = new BehaviorSubject<Image[]>([]);

  constructor(
    private http: HttpClient
  ) { }

  get images() {
    return this.imagesSubject.asObservable();
  }

  get() {
    return this.http.get<[]>('https://picsum.photos/v2/list').pipe(
      tap(
        (res) => {
          return this.imagesSubject.next(res);
        }
      )
    );
  }
}
