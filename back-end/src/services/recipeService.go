package services

import (
	"backend/src/database"
	"backend/src/models"
)

// get all recipes from database
func GetAllRecipes() []models.Recipe {
	var recipes []models.Recipe
	// .Preload("Ingredients")
	database.DB.Limit(10).Offset(0).Find(&recipes)
	return recipes
}
