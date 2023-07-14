
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material.module';
import { WidgetsModule } from '../widgets/data-table/widgets.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RecordsComponent } from './records/records.component';
import { RecordsRoutingModule } from './records-routing.module';


@NgModule({
  declarations: [
    RecordsComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    WidgetsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecordsRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RecordsModule { }
export function httpTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http);
  }