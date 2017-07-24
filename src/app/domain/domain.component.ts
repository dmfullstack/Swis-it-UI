import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css']
})
export class DomainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  clickondomain(domain: string) {
  console.log(domain);
  this.router.navigate(['app-searchbox', domain]);
  console.log(domain);
  }
}
