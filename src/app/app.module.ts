import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TopBarModule } from './ui/top-bar/top-bar.module';
import { MenuModule } from './ui/menu/menu.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        TopBarModule,
        MenuModule,
        HttpClientModule,
    ],
    declarations: [AppComponent],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
