import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class TermbankserviceService {

    constructor(private http: Http) { }
    GetTerms() {
        return this.http.get('http://172.23.239.162:8090/v1/api/termbank/terms')
        .map((terms) => terms.json() || []);
    }
}
