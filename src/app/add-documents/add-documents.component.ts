import { Component, OnInit } from '@angular/core';
import { ConceptService } from 'app/service/concept.service';

@Component({
  selector: 'app-add-documents',
  templateUrl: './add-documents.component.html',
  styleUrls: ['./add-documents.component.css']
})
export class AddDocumentsComponent implements OnInit {
concept_array: String[];
  constructor(private conceptService: ConceptService) { }

  ngOnInit() { }
  search(domain, concept) {
    this.concept_array = concept.split(',');
    const m = {'domain': domain, 'concept': this.concept_array, 'results': '10', 'sitesearch': 'none'};
    this.conceptService.searchjob(m);
  }
}
