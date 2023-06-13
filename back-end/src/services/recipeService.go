package services

import (
	"backend/src/database"
	"backend/src/models"
)

// get all recipes from database
func GetAllRecipes(page int) []models.Recipe {
	limit := 10
	offset := page * limit
	var recipes []models.Recipe
	// .Preload("Ingredients")
	database.DB.Preload("Ingredients").Limit(limit).Offset(offset).Find(&recipes)
	return recipes
}

// get a recipe by id from database
func GetRecipeById(id string) models.Recipe {
	var recipe models.Recipe
	database.DB.Preload("Ingredients").First(&recipe, id)
	return recipe
}

// get recipes by title from database
func GetRecipesByTitle(q string) []models.Recipe {
	var recipes []models.Recipe
	database.DB.Preload("Ingredients").Limit(10).Where("title LIKE ?", "%"+q+"%").Find(&recipes)
	return recipes
}
