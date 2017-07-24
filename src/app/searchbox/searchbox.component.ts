import { Component, OnInit } from '@angular/core';
import { ConceptService } from 'app/service/concept.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DomainComponent } from 'app/domain/domain.component';


@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {
model1: any;
model2: any;
conceptDomain: string[];
TermDomain: string[];
DomainName: String[];
userResult: any[];

constructor(private route: ActivatedRoute, private conceptService: ConceptService,
       private domainComponent: DomainComponent) {}

  ngOnInit() {
    window.scrollTo(0, document.body.scrollHeight);
     this.route.params.subscribe(params => {this.DomainName = params['domain']; });
       console.log(this.DomainName);
         this.conceptService.searchConcept(this.DomainName)
        .subscribe((concept ) => { this.conceptDomain = concept;
         console.log('concept ' + concept);
        });
         this.conceptService.searchTerm().subscribe((Term ) => { this.TermDomain = Term; });
      }

      goback() {
        window.history.back();
      }

      search(concept, term) {
        console.log('concept is ' + concept + 'term is ' + term);
        const requestData = { 'domain': this.DomainName, 'concept' : concept , 'term' : term };
        JSON.stringify(requestData);
        this.conceptService.search(requestData).subscribe((data) => {
            this.userResult = data;
            console.log(this.userResult);
          }
        );
        // window.scrollTo(0,document.body.scrollHeight);
      }
}
