import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingModules } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RecipeService } from './services/recipe.service';
import { CommonModule } from '@angular/common';
import { RecipeDetailComponent } from './components/recipe/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RoutingModules,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
