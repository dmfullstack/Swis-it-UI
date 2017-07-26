import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions , Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class ConceptService {

  constructor(private http: Http ,  private router: Router) { }

 // tofetch(domain : string)
 // {
 //   console.log("domainToFetch");
 //     return this.http.get('http://localhost:8090/v1/api/swisit/usersearch/getConcepts')
 //   .map((response) => response.json() || []);
 //   //console.log("aaaaaaaa"+domain);
 //   //return Observable.of(domain);
 // }

    search(value) {
    console.log('inside service ' + value);
    const url = 'http://172.23.238.185:8091/v1/api/swisit/usersearch';
    const encoded_data = value;
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
  console.log( Observable.of( this.http.post(url, encoded_data , options).map((res) => res.json() || [])));  
    return this.http.post(url, encoded_data , options).map((res) => res.json() || []);
    }

    searchTerm() {
        console.log('inside service term');
  	 // let url = 'http://localhost:8090/v1/api/swisit/usersearch/getTerms';
  	 // let encoded_data=value;
    //       let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });
        return this.http.get('http://172.23.238.185:8091/v1/api/swisit/usersearch/getTerms').map((res) => res.json() || []);	
    }

    searchConcept(value) {
        console.log('inside service term');
        const url = 'http://172.23.238.185:8091/v1/api/swisit/usersearch/getConcepts';
        const encoded_data = value;
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
    return this.http.post(url, encoded_data, options).map((res) => res.json() || []);
    }

    login(username: string, password: string) {
        var basicHeader = btoa('swissit:stackroute');
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization', 'Basic ' + basicHeader);
        const options = new RequestOptions({headers: headers});
        const body = 'username=' + username + '&password=' + encodeURIComponent(password) + '&grant_type=password&' +
        'client_secret=stackroute&client_id=swissit';
        this.http.post('http://172.23.238.203:9000/oauth/token', body, options)
        .subscribe(data => {
            console.log(data);
            localStorage.setItem('username', username);
            localStorage.setItem('access_token', data.json().access_token);
            localStorage.setItem('refresh_token', data.json().refresh_token);
            this.router.navigate(['admin']);
        }, error => {
            this.router.navigate(['approot']);
        });
    }
    searchjob(m) {
        console.log(m);
        console.log('in service ' + m);
        const encodeddata = JSON.stringify(m);
        const s = 'hai';
        console.log('haiiiiiii');
        console.log('in add service ' + encodeddata);
        console.log(typeof(encodeddata));
        // let url = 'http://localhost:8090/v1/api/termbank/';
        const headers = new Headers({ 'content-type': 'application/json' });
           const options = new RequestOptions({ headers: headers });
         this.http.post('http://172.23.238.185:8050/v1/api/swisit/searcher', encodeddata, options)
         .map((res: Response) => res.json())
         .subscribe();
        // console.log(this.http.post('http://localhost:8090/v1/api/termbank/',encodeddata,headers));
         console.log('hi post comelted');
    }
}
