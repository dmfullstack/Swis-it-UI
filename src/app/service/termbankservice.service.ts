import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TermbankserviceService {

    constructor(private http: Http) { }

    getTerms() {
        return this.http.get('http://172.23.238.150:8090/v1/api/termbank/terms')
        .map( terms => terms.json() || [] );
    }
}
