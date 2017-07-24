import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordBankService } from 'app/service/WordBankService.service';

@Component({
  selector: 'app-term-bank',
  templateUrl: './term-bank.component.html',
  styleUrls: ['./term-bank.component.css']
})
export class TermBankComponent implements OnInit {
  @Input()
  concept: any;
  terms= [];
  message:string;
  words= [];
  term: string[]= [];
  termAnt= [];
  objectmap= {};
  optionsChecked: string[]= [];
  flag = 0;
  a: String;
  show: boolean;
  synweight= [];
  Antweight= [];
  obj: String;
  intialterms: string[]= [];
  intialintent: string[]= [];
  initialrelation: string[]= [];
  aab: string[];
  constructor(private route: ActivatedRoute, private wordBankService: WordBankService){}
  ngOnInit(): void {
    //this.route.params.subscribe(params => {this.obj = params['r'];
  //});
  this.obj = this.concept;
  console.log(this.obj);
  this.intialterms = this.obj.split('/');
  this.aab = this.obj.split('*');
  this.aab.splice(0,1);
  for (let i = 0; i < this.aab.length; i++) {
    console.log('intent is ' + this.aab[i]);
    let s =this.aab[i].split(',');
    console.log('length is '+ s.length + ' ' + s[0] + ' ' + s[1]);
    this.intialintent.push(s[0]);
    this.initialrelation.push(s[1]);
    }
    console.log('hi dude ' + this.intialterms + ' ' + this.intialintent + ' ' + this.initialrelation);
    this.wordBankService.GetWords(this.intialterms[0]).subscribe((terms) => {
    this.terms = terms;
  });

      // this.route.params
      // .switchMap((params: Params) => this.wordBankService.GetWords(params['word']))
      // .subscribe((terms) => {
      // 	this.terms = terms;
      // });
  }

  saveSyn(event) {
    let value = event.target.value;
    console.log('value is ' + value);
    console.log(event.target.checked);
    if (event.target.checked) {
      this.flag = 1;
      this.term.push(event.target.value);
      this.a = value;
      } else {
      this.flag = 0;
      this.a = null;
      let index = this.term.indexOf(event.target.value);
      console.log('element presnet in this index ' + index);
      if (index > -1){
        this.term.splice(index, 1);
        this.synweight.splice(index, 1);
      }
      // event.target.value:boolean;
      // event.target.value = true;
      }
  }

  saveAnt(event) {
    let value = event.target.value;
    console.log('value is ' + value);
    console.log(event.target.checked);
    if (event.target.checked) {
    this.flag = 1;
    this.termAnt.push(event.target.value);
    this.a = value;
    }
    if (event.target.checked === false){
    this.flag = 0;
    this.a = null;
    let index = this.termAnt.indexOf(event.target.value);
    console.log('element presnet in this index ' + index);
    if (index > -1){
    this.termAnt.splice(index, 1);
    this.Antweight.splice(index, 1);
    }
    }
  }

  saveall(event){
    let value = event.target.value;
    console.log('value is ' + value);
    for (let i = 0; i < this.term.length; i++) {
      console.log('synonyms is' + this.term[i]);
    }
    for (let i = 0; i < this.termAnt.length; i++) {
      console.log('antonyms is ' + this.termAnt[i]);
    }
    for (let i = 0; i < this.synweight.length; i++) {
      console.log('weight is ' + this.synweight[i]);
    }
    for (let i = 0; i < this.Antweight.length; i++) {
      console.log('weight is ' + this.Antweight[i]);
    }
      // let m={'synonyms':this.term , 'antonyms': this.termAnt  , 'synweight' :this.synweight , 'antweight':this.Antweight};
    this.wordBankService.CreateTerms(this.term, this.termAnt, this.synweight, this.Antweight, this.intialintent, this.initialrelation).subscribe(message => {this.message = message; console.log("message is "+message);alert(this.message['message']);});
    // alert(this.message['message']);
  }

  valuesSyn(weight) {
    this.synweight.push(weight);
  }

  valuesAnt(weight) {
    this.Antweight.push(weight);
  }
}


