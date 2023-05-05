import { Component, OnInit } from '@angular/core';
import { LoadingService } from './loading.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  loading$: boolean = false;
  constructor(private readonly loadingService: LoadingService){}
  ngOnInit(): void{
    this.loading$ = false;
    this.loadingService.getLoading()
      .pipe(delay(0)) // Isso evita um ExpressionChangedAfterItHasBeenCheckedError para solicitações subsequentes
      .subscribe((loading) => {
          this.loading$ = loading;
      });
  }
}
