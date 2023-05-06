import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  providers: [MessageService]
})
export class LayoutComponent implements OnInit {
  loading:boolean = true;
ngOnInit(): void {
  this.loading = true
}
}
