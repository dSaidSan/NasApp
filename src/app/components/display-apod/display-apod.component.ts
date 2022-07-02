import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ApodApiService } from 'src/app/services/apod-api.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-display-apod',
  templateUrl: './display-apod.component.html',
  styleUrls: ['./display-apod.component.css']
})
export class DisplayApodComponent implements OnInit {

  @Input() dataInput: any;
  data: any;

  constructor(private apodService: ApodApiService, private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.apodService.getData().subscribe(resp => {
      var apod = JSON.parse(JSON.stringify(resp));
      apod.isModal = false;
      this.data = apod;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.data = changes['dataInput'].currentValue;
    this.data.isModal  = true;
  }

  saveApod(data: any) {
    this.firebaseService.saveApod(data);
  }

}
