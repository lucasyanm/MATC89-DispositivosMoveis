import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { HeroListComponet } from "./hero-list/hero-list.component";
import { HeroEditComponet } from "./hero-edit/hero-edit.component";

const routes: Routes = [
  { path: "", redirectTo: "/list", pathMatch: "full" },
  { path: "list", component: HeroListComponet },
  { path: "details/:id", component: HeroDetailComponent },
  { path: "edit/:id", component: HeroEditComponet },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
