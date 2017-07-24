import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DomainComponent } from './domain/domain.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { SwisitMaterialModule } from './swisit-material.module';
import { AppRouterModule } from './approuter.module';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';
import { AdminComponent } from 'app/admin/admin.component';
import { HomeComponent } from 'app/home/home.component';
import { ConceptService } from 'app/service/concept.service';
import { UsernavbarComponent } from 'app/usernavbar/usernavbar.component';
import { AddDocumentsComponent } from 'app/add-documents/add-documents.component';
import { AddTermsComponent } from 'app/add-terms/add-terms.component';
import { WordBankService } from 'app/service/WordBankService.service';
import { TermbankserviceService } from 'app/service/termbankservice.service';
import { TermBankComponent } from 'app/term-bank/term-bank.component';

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, DomainComponent,
    SearchboxComponent, AdminComponent, HomeComponent, UsernavbarComponent,
    AddDocumentsComponent, AddTermsComponent, TermBankComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, SwisitMaterialModule,
    AppRouterModule, NguiAutoCompleteModule, ReactiveFormsModule
  ],
  providers: [ConceptService, TermbankserviceService, WordBankService],
  bootstrap: [AppComponent]
})
export class AppModule { }
