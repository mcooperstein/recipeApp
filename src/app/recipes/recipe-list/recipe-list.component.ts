import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

@Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
  new Recipe("Grilled Salmon Recipe", "Salmon mmm...", "https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg"),
  new Recipe("Chicken Recipe", "Ina Garden's Chicken", "http://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/2/19/1/FN_Baked-Lemon-Chicken_s4x3.jpg.rend.hgtvcom.616.462.suffix/1392869571393.jpeg"),
  new Recipe("Grilled Cheese Recipe", "Chef Grilled Cheese", "http://www.arborsofdenton.com/app/uploads/2015/04/The-Perfect-Grilled-Cheese-Sandwich-500-4401-300x199.jpg"),
  new Recipe("Chocolate Chip Cookies Recipe", "Mrs. Fields' Cookies", "https://sugarspunrun.com/wp-content/uploads/2017/05/Chocolate-Chip-Cookie-Recipe-1-of-1.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
