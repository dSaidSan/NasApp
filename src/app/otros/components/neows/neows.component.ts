import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NeowsService } from 'src/app/services/neows.service';

@Component({
  selector: 'app-neows',
  templateUrl: './neows.component.html',
  styleUrls: ['./neows.component.css']
})
export class NeowsComponent implements OnInit {

  data: any;

  constructor(private neows: NeowsService) { }

  ngOnInit(): void {
    this.neows.getData().subscribe(resp => {
      const today = formatDate(new Date(), 'yyyy-MM-dd', 'en');
      this.data = resp['near_earth_objects'][today];
    });
  }

}
