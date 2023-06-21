package services

import (
	"backend/src/configuration/rest_err"
	"backend/src/database"
	"backend/src/models"
)

// add favorite to user
func InsertFavoriteRecipe(userID float64, recipeID string) *rest_err.RestErr {
	var user models.User
	if err := database.DB.First(&user, userID).Error; err != nil {
		customError := rest_err.NewNotFoundError("user not found, error: " + err.Error())
		return customError
	}

	var recipe models.Recipe
	if err := database.DB.First(&recipe, recipeID).Error; err != nil {
		customError := rest_err.NewNotFoundError("recipe not found, error: " + err.Error())
		return customError
	}

	user.Favorites = append(user.Favorites, &recipe)

	if err := database.DB.Save(&user).Error; err != nil {
		customError := rest_err.NewInternalServerError("error to insert favorite", err)
		return customError
	}

	return nil
}

func RemoveFavoriteRecipe(userID float64, recipeID string) *rest_err.RestErr {
	var user models.User
	if err := database.DB.Preload("Favorites").First(&user, userID).Error; err != nil {
		customError := rest_err.NewNotFoundError("user not found, error: " + err.Error())
		return customError
	}

	var recipe models.Recipe
	if err := database.DB.First(&recipe, recipeID).Error; err != nil {
		customError := rest_err.NewNotFoundError("recipe not found, error: " + err.Error())
		return customError
	}

	database.DB.Model(&user).Association("Favorites").Delete(&recipe)

	return nil
}
