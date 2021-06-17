import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from './routing/routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UiService } from './ui.service';

@NgModule({
  imports: [BrowserModule, FormsModule, RoutingModule, BrowserAnimationsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    NavbarComponent,
    SidebarComponent
  ],
  bootstrap: [AppComponent],
  providers: [UiService]
})
export class AppModule {}
