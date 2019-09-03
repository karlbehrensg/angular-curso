import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
  }

  getQuery( query: string ) {

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQAbSDbDrvhR5XYiJeiToSSwkEXlq724HLLR1U2JbM0oBdv7P6IexvO8krRwwQJcWqKq8AqI1jyIc7OuvHY'
    });

    return this.http.get(url, { headers });

  }

  getNewReleases() {

    return this.getQuery('browse/new-releases')
      // tslint:disable-next-line: no-string-literal
      .pipe( map( data => data['albums'].items ));

  }

  getArtista( termino: string ) {

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
      // tslint:disable-next-line: no-string-literal
      .pipe( map( data => data['artists'].items ));

  }
}
