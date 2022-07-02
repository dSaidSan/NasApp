import { Component, OnInit, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { saveAs } from "file-saver";
import * as JSZip from 'jszip';
import { Observable, of } from 'rxjs';
import { Apod } from 'src/app/models/Apod';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  displayModal: string = 'none';
  listaFavoritos: Observable<Apod[]> = new Observable<Apod[]>();
  selectedApod;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.listaFavoritos = this.firebaseService.getAllApod();
  }

  deleteApod(id) {
    this.firebaseService.deleteApod(id);
  }

  openApodModal(apod) {
    this.selectedApod = apod;
    this.displayModal = 'block';
  }
  closeApodModal() {
    this.displayModal = 'none';
  }

  // downloadZip() {
  //   const zip = new JSZip();
  //   if (this.listaFavoritos.length != 0) {
  //     this.listaFavoritos.forEach(fav => {
  //       var file = fetch(fav.url)
  //       .then((e) => {
  //           return e.blob()
  //         })
  //         .then((blob) => {
  //           let b: any = blob
  //           b.lastModifiedDate = new Date()
  //           b.name = ''
  //           return b as File
  //         })
  //         zip.file('prueba.jpg',file);

  //     });
  //   }
  //   zip.generateAsync({ type: "blob" })
  //     .then(function (content) {
  //       saveAs(content, "example.zip");
  //     });
  // }

}
