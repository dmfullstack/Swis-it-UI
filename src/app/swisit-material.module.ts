import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdGridListModule , MdButtonModule, MdCheckboxModule,
         MdMenuModule, MdToolbarModule, MdIconModule, MdInputModule,
         MdAutocompleteModule, MdOptionModule,
        MdCardModule, MdProgressSpinnerModule, MdChipsModule} from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MdSelectModule } from '@angular/material';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';

@NgModule({
  imports: [
    MdAutocompleteModule,
    CommonModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    MdGridListModule,
    MdOptionModule,
    MdProgressSpinnerModule,
    MdChipsModule,
    NoopAnimationsModule,
    MdSelectModule,
    NguiAutoCompleteModule
    
  ],
  exports: [
    MdAutocompleteModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    MdCheckboxModule,
    MdGridListModule,
    MdOptionModule,
    MdProgressSpinnerModule,
    MdChipsModule,
    NoopAnimationsModule,
    MdSelectModule,
    NguiAutoCompleteModule
    
    ],
  declarations: []
})
export class SwisitMaterialModule { }
