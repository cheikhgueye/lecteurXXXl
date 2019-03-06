
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Etudiant} from './etudiant';

/*
  Generated class for the MainServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MainProvider  {
  apiUrl = 'http://192.168.43.90:2020';
  constructor(public http: HttpClient) {
    console.log('Hello MainServiceProvider Provider');
  }


  getEtudiants() {



    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/all/etudiants').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
   update(etudiant: Etudiant, id ) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    this.http.put(this.apiUrl+'/update/etudiant/'+id,JSON.stringify(etudiant)
    ,{headers}).subscribe(data => {})
    }



    getEtudiant(n) {
      let headers: HttpHeaders = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');
      return this.http.post( this.apiUrl+'/nfcFind',n,{headers})

}

solde(id,s,tarif) {

 return new Promise(resolve => {
  this.http.get(this.apiUrl+'/nfcFind/'+id+'/'+s+'/'+tarif).subscribe(data => {
    resolve(data);
  }, err => {
    console.log(err);
  });
});

}

}
