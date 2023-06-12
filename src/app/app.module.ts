import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule, CheckBoxModule, RadioButtonModule, SwitchModule, ChipListModule, FabModule, SpeedDialModule } from '@syncfusion/ej2-angular-buttons';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SidebarModule,
    ButtonModule, CheckBoxModule, RadioButtonModule, SwitchModule, ChipListModule, FabModule, SpeedDialModule, ListViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
