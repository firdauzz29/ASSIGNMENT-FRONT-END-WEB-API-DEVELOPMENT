import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { Page2Component } from './page2/page2.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [ { path: "navbar", component:NavbarComponent }, 
{ path: "page1", component:Page1Component },
 { path: "page2", component:Page2Component },
 { path: "search-page", component:SearchPageComponent },
 { path: "about-page", component:AboutPageComponent },
 { path: "home-page", component:HomePageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
