package services

import (
	"backend/src/database"
	"backend/src/models"
)

// get all recipes from database
func GetAllRecipes() []models.Recipe {
	var recipes []models.Recipe
	// .Preload("Ingredients")
	database.DB.Preload("Ingredients").Limit(10).Offset(0).Find(&recipes)
	return recipes
}

// get a recipe by id from database
func GetRecipeById(id string) models.Recipe {
	var recipe models.Recipe
	database.DB.Preload("Ingredients").First(&recipe, id)
	return recipe
}
