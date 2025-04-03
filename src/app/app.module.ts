import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, RouterOutlet} from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LuftfeuchtigkeitComponent } from './luftfeuchtigkeit/luftfeuchtigkeit.component';
import { TemperaturComponent } from './temperatur/temperatur.component';
import { LuftdruckComponent } from './luftdruck/luftdruck.component';
import { LuftqualitaetComponent } from './luftqualitaet/luftqualitaet.component';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatSelectModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    TemperaturComponent,
    LuftfeuchtigkeitComponent,
    TemperaturComponent,
    LuftdruckComponent,
    LuftqualitaetComponent,
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
