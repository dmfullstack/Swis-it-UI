import { Component, OnInit } from '@angular/core';
import { ConceptService } from 'app/service/concept.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private conceptService: ConceptService ) { }

  ngOnInit() { }

  login(username: string, password: string){
    console.log(username + ' ' + password);
    this.conceptService.login(username, password);
  }
}
