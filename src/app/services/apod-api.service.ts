import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApodApiService {

  url: string = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.url);
    // return Observable.create((observer: any) => {
    //   observer.next(this.getDataEnDuro())
    // })


  }

  getDataEnDuro() {
    return {
      "copyright": "Min Xie",
      "date": "2022-06-18",
      "explanation": "Supergiant star Gamma Cygni is at the center of the Northern Cross. Near the plane of our Milky Way galaxy, that famous asterism flies high in northern summer night skies in the constellation Cygnus the Swan. Known by the proper name Sadr, Gamma Cygni also lies just below center in this telescopic skyscape, with colors mapped from both broadband and narrowband image data. The field of view spans about 3 degrees (six Full Moons) on the sky and includes emission nebula IC 1318 and open star cluster NGC 6910. Filling the upper part of the frame and shaped like two glowing cosmic wings divided by a long dark dust lane, IC 1318's popular name is understandably the Butterfly Nebula. Right of Gamma Cygni, are the young, still tightly grouped stars of NGC 6910. The distance to Gamma Cygni is around 560 parsecs or 1,800 light-years. Estimates for IC 1318 and NGC 6910 range from 2,000 to 5,000 light-years.",
      "hdurl": "https://apod.nasa.gov/apod/image/2206/gamma-cygni-nebula-and-sadr.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "The Gamma Cygni Nebula",
      "url": "https://apod.nasa.gov/apod/image/2206/gamma-cygni-nebula-and-sadr1024.jpg"
    }
  }
}
