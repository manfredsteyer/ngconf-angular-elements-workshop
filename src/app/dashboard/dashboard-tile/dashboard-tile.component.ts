import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard-tile',
  templateUrl: './dashboard-tile.component.html',
  styles: [`
    .card .title {
      color: green;
      color: var(--my-color)
    }
  `],
  encapsulation: ViewEncapsulation.Emulated
})
export class DashboardTileComponent implements OnInit {
  @Input() a: number;
  @Input() b: number;
  @Input() c: number;

  // data for chart
  data: object = {};

  ngOnInit() {
    this.data = [
      {
        name: 'a',
        value: this.a
      },
      {
        name: 'b',
        value: this.b
      },
      {
        name: 'c',
        value: this.c
      }
    ];
  }
}
