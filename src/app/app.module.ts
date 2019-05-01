import { DashboardPageComponent } from './dashboard/dashboard-page/dashboard-page.component';
import {HttpClientModule} from '@angular/common/http';

import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {APP_ROUTES} from './app.routes';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SharedModule} from './shared/shared.module';
import {SidebarComponent} from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardTileModule } from './dashboard/dashboard-tile/dashboard-tile.module';
import { TabsPageComponent } from './tab-example/tabs-page/tabs-page.component';
import { TabsComponent } from './tab-example/tabs/tabs.component';
import { TabsModule } from './tab-example/tabs/tabs.module';
import { CustomCheckboxModule } from './native-elements/custom-checkbox/custom-checkbox.module';

@NgModule({
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      SharedModule.forRoot(),
      RouterModule.forRoot(APP_ROUTES),
      DashboardTileModule,
      TabsModule,
      CustomCheckboxModule,
   ],
   declarations: [
      AppComponent,
      SidebarComponent,
      NavbarComponent,
      HomeComponent,
      DashboardPageComponent,
      TabsPageComponent
   ],
   providers: [],
   schemas: [
      CUSTOM_ELEMENTS_SCHEMA
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {
}
