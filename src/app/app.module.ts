import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MetricsComponent } from './metrics/metrics.component';
import { MetadataComponent } from './metadata/metadata.component';
import { ProcessesComponent } from './processes/processes.component';
import { LogsComponent } from './logs/logs.component';
import { TopbarComponent } from './topbar/topbar.component';
import { JlistComponent } from './jlist/jlist.component';

@NgModule({
  declarations: [
    AppComponent,
    MetricsComponent,
    MetadataComponent,
    ProcessesComponent,
    LogsComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule    
  ],
  providers: [
    JlistComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
