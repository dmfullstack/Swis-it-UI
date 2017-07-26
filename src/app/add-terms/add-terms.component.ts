import { Component, OnInit } from '@angular/core';
import { Words } from 'app/model/Words';
import { TermbankserviceService } from 'app/service/termbankservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-terms',
  templateUrl: './add-terms.component.html',
  styleUrls: ['./add-terms.component.css']
})
export class AddTermsComponent implements OnInit {
    model1: any;
    v: any[];
    r: String;
    inn: String = '';
    tn: String;
    a = 0;
    filterv: Array<any> = [];

    constructor(private termbankserviceService: TermbankserviceService, private router: Router){
    }
    
    ngOnInit() {
      this.termbankserviceService.getTerms()
      .subscribe( terms => {
        this.v = terms;
      } );
    }

    // suggest(keywords) {
    //   console.log(keywords);
    //   this.v = this.v.filter(item => item.TermName.startsWith(keywords));
    // }
    suggest(val: string) {
     this.filterv = this.v.filter(s => s.TermName.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

    searchTerm(word: String): void {
      console.log('this is ' + word);
      let r: Words;

      for (let i = 0; i < this.v.length; i++) {
        if (this.v[i].TermName === word) {
        console.log(this.v[i].TermName);
        this.tn = this.v[i].TermName;
        this.inn = this.inn + '*' + this.v[i].intentName + ',' + this.v[i].Relation;
      }
    }

    this.r = this.tn + '/' + this.inn;
    console.log(this.r);
    this.a = 1;
    // this.router.navigate(['/app-term', this.r]);
    }
}
