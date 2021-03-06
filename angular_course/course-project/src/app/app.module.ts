import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeComponent } from './recipes/recipe-list/recipe/recipe.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipesComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
