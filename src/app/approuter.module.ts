import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { DomainComponent } from './domain/domain.component';
import { FormControl, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SwisitMaterialModule } from './swisit-material.module';
import { SearchboxComponent } from 'app/searchbox/searchbox.component';
import { ConceptService } from 'app/service/concept.service';
import {AdminComponent} from 'app/admin/admin.component';
import {AppComponent  } from 'app/app.component';
import { HomeComponent } from 'app/home/home.component';
import { AddDocumentsComponent } from 'app/add-documents/add-documents.component';
import { AddTermsComponent } from 'app/add-terms/add-terms.component';
import { TermBankComponent } from 'app/term-bank/term-bank.component';

const routes: Routes = [
                    { path: 'app-term/:r', component: TermBankComponent},
                      {path: 'addDocuments', component: AddDocumentsComponent},
                    {path: 'addTerms', component: AddTermsComponent},
                    {path: 'admin', component: AdminComponent, children : [
                          {path: 'addDocuments', component: AddDocumentsComponent},
                          {path: 'addTerms', component: AddTermsComponent}]},
                    {path: 'approot', component: AppComponent},
                    {path: '', component: HomeComponent, children : [
                          {path: 'app-searchbox/:domain', component: SearchboxComponent}] }
];

@NgModule({
      imports: [BrowserModule, SwisitMaterialModule, ReactiveFormsModule, RouterModule.forRoot(routes)],
      providers: [ ConceptService ],
      exports: [BrowserModule, SwisitMaterialModule, ReactiveFormsModule, RouterModule]
})

export class AppRouterModule {}
