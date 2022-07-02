import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Apod } from '../models/Apod';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  user: any = JSON.parse(localStorage.getItem('user')!);

  constructor(private firestore: AngularFirestore) { }

  saveApod(data: any) {
    this.firestore.collection('users').doc(this.user.uid).collection('favoritos').doc().set(data).then(() => {
      alert('Imagen del día guardada');
    });
  }

  getAllApod() {
    return this.firestore.collection('users').doc(this.user.uid).collection<Apod>('favoritos').valueChanges({ idField: 'id' });
  }

  deleteApod(id) {
    this.firestore.collection('users').doc(this.user.uid).collection('favoritos').doc(id).delete();
  }
}
