import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WordBankService {

    constructor(private http: Http) { }
    GetWords(terms: string) {
    // console.log(terms);
    const url = 'http://172.23.238.150:8090/v1/api/termbank/' + terms;
    return this.http.get(url)
    .map((response) => response.json() || []);
    }

    CreateTerms(synonyms: string[], antonyms: string[], synweight: string[], antweight: string[], intent: string[], relation: string[]){
    const encodeddata = JSON.stringify({synonyms: synonyms, antonyms: antonyms,
        synweight: synweight, antweight: antweight, intent: intent, relation: relation});
    const s = 'hai';
    console.log('haiiiiiii');
    console.log('in add service ' + encodeddata);
    const url = 'http://172.23.238.150:8090/v1/api/termbank/';
    const headers = new Headers({ 'content-type': 'application/json' });
    const options = new RequestOptions({ headers: headers, method : 'post' });
    return this.http.post(url, encodeddata, options).map((res: Response) => res.json());
        //.catch((error: any) => Observable.throw(error.json().error || 'Server error')) //...errors if
        //.subscribe();
    //console.log('after post method');
    //return m;
    }
}
