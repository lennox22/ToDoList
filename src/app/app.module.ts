import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShowTasklistComponent } from './show-tasklist/show-tasklist.component';
import { ShowSearchComponent } from './show-search/show-search.component';
import { CustomPipe } from './custom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShowTasklistComponent,
    ShowSearchComponent,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
