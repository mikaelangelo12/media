import { Injectable } from '@angular/core';
import { Subject, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() { }
  loadingSubject = new Subject<boolean>();

  getLoading() {
    return this.loadingSubject
      .asObservable()
      .pipe(startWith(false));
  }

  start() {
    this.loadingSubject.next(true);
  }

  stop() {
    this.loadingSubject.next(false);
  }
}
