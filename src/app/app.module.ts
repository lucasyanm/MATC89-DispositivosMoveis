import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  NativeScriptFormsModule,
  NativeScriptModule,
} from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeroListComponet } from "./hero-list/hero-list.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { HeroEditComponet } from "./hero-edit/hero-edit.component";

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule, NativeScriptFormsModule],
  declarations: [
    AppComponent,
    HeroListComponet,
    HeroDetailComponent,
    HeroEditComponet,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
