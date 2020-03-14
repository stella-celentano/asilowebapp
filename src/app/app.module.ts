//Import Modules
import { NgModule } from '@angular/core'
import { HttpModule } from "@angular/http"
import { WebAppModule } from "./web-app/web-app.module"
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from "@angular/common/http"
import { AdminPanelModule } from "./admin-panel/admin-panel.module"
import { SharedModule } from "./shared/shared.module"

//Import Components
import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    WebAppModule,
    BrowserModule,
    HttpClientModule,
    AdminPanelModule,
    SharedModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }