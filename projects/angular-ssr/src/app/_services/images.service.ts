import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, BehaviorSubject, catchError, Observable } from  'rxjs';
import { Image } from '../_models/Image';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  imagesSubject = new BehaviorSubject<Image[]>([]);

  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) { }

  get images() {
    return this.imagesSubject.asObservable();
  }

  get(term?: string) : Observable<Image[]> {

    term = term?.trim();

    const options = term ? { params: new HttpParams().set('page', term) } : {};
    return this.http.get<[]>('https://picsum.photos/v2/list', options).pipe(
      tap(
        (res) => {
          return this.imagesSubject.next(res);
        }
      ),
      catchError(this.errorService.handleError)
    );
  }
}
